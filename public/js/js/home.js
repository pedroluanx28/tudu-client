import axios from "../node_modules/axios/index.js";
async function fetchData() {
    try {
        const response = await axios.get("https://run.mocky.io/v3/2092a843-2fe9-4b83-addb-eda2339d2ecb");
        return response;
    }
    catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}
async function init() {
    const data = await fetchData();
    console.log(data);
}
init();
