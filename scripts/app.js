//IMPORTS
import { startTestOverlay } from "./remove-overlay.js";
import { splitAppData,spans } from "./source-of-truth.js";
import { displayArea } from "./display-and-input-area.js";
import { difficultyIndex } from "./difficulty.js";
import { modeSystem, timer } from "./app-mode.js";
import { currentIndex, totalChars } from "./typing-engine.js";
import { wpmTimer } from "./accuracy-and-wpm.js";

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


//TEST ENDED FUNCTION
const endTest = ()=>{
    if(currentIndex>=totalChars || appState.status==="test ended"){
        changeAppState("test ended");
        clearInterval(timer);
        clearInterval(wpmTimer);
        //console.log(appState.status)
        return;
    }
    
}





export { changeAppState,appState,changeVariable,endTest }