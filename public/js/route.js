import { routes, routesJavascriptFiles, routesCssFiles } from "./utils/routesName.js";
export function route(event) {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}
async function handleLocation() {
    const path = window.location.pathname;
    const route = routes[path] || "";
    const javascriptFile = routesJavascriptFiles[path] || "";
    const html = await fetch(route).then((response) => {
        if (response.status === 404) {
            return "<h1>404 Not Found</h1>";
        }
        return response.text();
    });
    const app = document.querySelector("#content");
    if (app) {
        app.innerHTML = html;
        const script = document.createElement("script");
        script.src = javascriptFile;
        script.type = "module";
        document.head.appendChild(script);
        const cssFile = routesCssFiles[path] || "";
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssFile;
        document.head.appendChild(link);
    }
}
window.onpopstate = handleLocation;
handleLocation();
