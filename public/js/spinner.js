export function createSpinner() {
    const spinnerContainers = document.getElementsByClassName("spinner-container");
    if (!spinnerContainers.length) {
        return;
    }
    const spinner = document.createElement("img");
    spinner.src = "../../assets/spinner.gif";
    Array.from(spinnerContainers).forEach((container) => {
        container.appendChild(spinner);
    });
}
export function removeSpinner() {
    const spinnerContainers = document.getElementsByClassName("spinner-container");
    if (!spinnerContainers.length) {
        return;
    }
    Array.from(spinnerContainers).forEach((container) => {
        container.remove();
    });
}
