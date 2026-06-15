let appState = "notStarted";

//START TYPING BEST BUTTON REMOVAL ON CLICK
const startTestOverlay = document.querySelector(".start-test");

startTestOverlay.addEventListener("click", (e)=>{
    if(e.target.closest(".typing-text-container")){
        startTestOverlay.classList.add("no-display");
        appState="getting started"
    }
});