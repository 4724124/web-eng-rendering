"use strict";
const app = document.querySelector("#app");
if (app === null) {
    throw new Error("#appが見つからない");
}
window.addEventListener("hashchange", () => {
    const page = location.hash;
    switch (page) {
        case "#detail":
            app.innerHTML = `
            <h1>detail</h1>`;
            break;
        case "#compare":
            app.innerHTML = `
            <h1>compare</h1>`;
            break;
        default:
            break;
    }
});
