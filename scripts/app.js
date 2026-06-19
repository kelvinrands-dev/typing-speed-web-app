//IMPORTS
import { startTestOverlay } from "./remove-overlay.js";
import { splitAppData,spans } from "./source-of-truth.js";
import { displayArea } from "./display-and-input-area.js";
import { difficultyIndex } from "./difficulty.js";
import { modeSystem } from "./app-mode.js";
import { totalChars } from "./typing-engine.js";

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





export { changeAppState,appState,changeVariable }