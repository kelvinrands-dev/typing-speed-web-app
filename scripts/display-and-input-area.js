import { appState } from "./app.js";

//FETCHING INPUT AND DISPLAY AREA
const userInput = document.querySelector("#hiddenInput");
const displayArea = document.querySelector(".display-text-area");

const updateDisplayAreaHeight = () => {
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const areaTop = displayArea.getBoundingClientRect().top;
    const availableHeight = viewportHeight - areaTop - 16;
    const nextHeight = Math.max(180, Math.min(availableHeight, 420));

    displayArea.style.height = `${nextHeight}px`;
    displayArea.style.maxHeight = `${nextHeight}px`;
};

const followCurrentLine = () => {
    const activeSpan = displayArea.querySelector(".char-span.highlight");
    if (!activeSpan) return;

    const spanTop = activeSpan.offsetTop;
    const spanBottom = spanTop + activeSpan.offsetHeight;
    const containerHeight = displayArea.clientHeight;
    const centerOffset = Math.max(12, Math.floor(containerHeight * 0.22));
    const targetTop = spanTop - centerOffset;

    const maxScroll = Math.max(0, displayArea.scrollHeight - containerHeight);
    const nextScroll = Math.max(0, Math.min(targetTop, maxScroll));

    if (Math.abs(displayArea.scrollTop - nextScroll) > 1) {
        displayArea.scrollTop = nextScroll;
    }
};

const scheduleFollow = () => {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            updateDisplayAreaHeight();
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










export { userInput,displayArea }