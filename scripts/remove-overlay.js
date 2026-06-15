import { appState } from "./app.js";

//START TYPING BEST BUTTON REMOVAL ON CLICK
const startTestOverlay = document.querySelector(".start-test");
const userInput = document.querySelector("#hiddenInput");

startTestOverlay.addEventListener("click", (e)=>{
    if(e.target.closest(".typing-text-container")){
        startTestOverlay.classList.add("no-display");
        appState="getting started";
        userInput.focus();
    }
});

export { startTestOverlay,userInput }