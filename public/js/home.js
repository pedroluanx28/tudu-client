import { createSpinner, removeSpinner } from "./spinner.js";
async function fetchTasks() {
    const taskList = document.getElementById("task-list");
    if (!taskList) {
        return [];
    }
    try {
        const spinnerContainer = document.createElement("div");
        spinnerContainer.classList.add("spinner-container");
        taskList.appendChild(spinnerContainer);
        createSpinner();
        const data = (await fetch("https://run.mocky.io/v3/ef0fd1d8-e594-4977-a1bf-4bd60542fb31")).json();
        return data;
    }
    catch (error) {
        console.error(error);
        return [];
    }
    finally {
        removeSpinner();
    }
}
async function initHome() {
    const taskList = document.getElementById("task-list");
    const tasks = await fetchTasks();
    function createTasks() {
        if (!taskList) {
            return;
        }
        if (tasks.length > 0) {
            tasks.map((task) => {
                const taskContainer = document.createElement("div");
                const taskCheckbox = document.createElement("input");
                const span = document.createElement("span");
                taskContainer.className = "task";
                taskCheckbox.type = "checkbox";
                span.innerText = task.body;
                taskContainer.appendChild(taskCheckbox);
                taskContainer.appendChild(span);
                taskList.appendChild(taskContainer);
            });
        }
    }
    createTasks();
}
initHome();
