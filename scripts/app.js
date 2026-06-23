//IMPORTS
import { startTestOverlay } from "./remove-overlay.js";
import { splitAppData,spans,totalChars } from "./source-of-truth.js";
import { displayArea } from "./display-and-input-area.js";
import { difficultyIndex,increaseDifficultyIndex,diffDropDown,diffDropArrow } from "./difficulty.js";
import { modeSystem,timer,modeDrop,modeArrow } from "./app-mode.js";
import { correctChars, currentIndex } from "./typing-engine.js";
import { currentAccuracy, currentWpm, wpmTimer } from "./accuracy-and-wpm.js";
import { showToast } from "./interactivity.js";

//APP STATE DECLARATION AND REUSABLE FUNCTION
const appState = {
    status:"not started"
};
const changeAppState = (newState)=>{
    appState.status = newState;
}

//REUSABLE INCREMENT COUNTER FUNCTION
const IncrementCounter = (counter)=>{
    counter++;
}
//REUSABLE CHANGER FUNCTION
const changeVariable = (variable,change)=>{
    variable=change;
};


//REMOVE DROP DOWN SETTINGS
const removeDropDown=()=>{
    modeDrop.classList.add("no-display");
    diffDropDown.classList.add("no-display");

    modeArrow.classList.remove("animate-arrow");
    diffDropArrow.classList.remove("animate-arrow");
}


//TEST ENDED FUNCTION
const endTest = ()=>{
    if(currentIndex>=totalChars || appState.status==="test ended"){
        changeAppState("test ended");
        clearInterval(timer);
        clearInterval(wpmTimer);
        //console.log(appState.status)

        localStorage.setItem("wpm",currentWpm);
        localStorage.setItem("accuracy",currentAccuracy);
        localStorage.setItem("corrChars",correctChars);
        localStorage.setItem("totChars",totalChars);

        increaseDifficultyIndex();
        window.location.href="resultspage.html";

        return;
    }
    
}


//RESTART BUTTON
const restartBtn = document.querySelector(".restart-btn");

restartBtn.addEventListener("click",(e)=>{
    increaseDifficultyIndex();
    restartBtn.classList.add('spinning');
    window.location.reload();
})




export { changeAppState,appState,changeVariable,endTest,removeDropDown }