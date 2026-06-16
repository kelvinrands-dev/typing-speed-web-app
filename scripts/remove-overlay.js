import { appState,changeAppState } from "./app.js";
import { userInput } from "./display-and-input-area.js";

//START TYPING BEST BUTTON REMOVAL ON CLICK
const startTestOverlay = document.querySelector(".start-test");

startTestOverlay.addEventListener("click", (e)=>{
    if(e.target.closest(".typing-text-container")){
        startTestOverlay.classList.add("no-display");
        changeAppState("getting started");
        userInput.focus();
    }
});

export { startTestOverlay }