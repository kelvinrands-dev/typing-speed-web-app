import { appState } from "./app.js";

//FETCHING INPUT AND DISPLAY AREA
const userInput = document.querySelector("#hiddenInput");
const displayArea = document.querySelector(".display-text-area");

const followCurrentLine = () => {
    const activeSpan = displayArea.querySelector(".char-span.highlight");
    if (!activeSpan) return;
    
    displayArea.scrollTop = activeSpan.offsetTop - (displayArea.clientHeight / 3);
};

const scheduleFollow = () => {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            followCurrentLine();
        });
    });
};

//LOCKING FOCUS TO INPUT
displayArea.addEventListener("click", () => {
    if (appState.status !== "not started") {
        userInput.focus();
        scheduleFollow();
    }
});

userInput.addEventListener("input", scheduleFollow);
userInput.addEventListener("focus", scheduleFollow);
window.addEventListener("resize", scheduleFollow);
window.visualViewport?.addEventListener("resize", scheduleFollow);

export { userInput, displayArea }