//IMPORTS
import { startTestOverlay } from "./remove-overlay.js";
import { splitAppData,spans } from "./source-of-truth.js";
import { displayArea } from "./display-and-input-area.js";


//APP STATE DECLARATION AND REUSABLE FUNCTION
let appState = "notStarted";
const changeAppState = (newState)=>{
    appState = newState;
}





export { changeAppState,appState }