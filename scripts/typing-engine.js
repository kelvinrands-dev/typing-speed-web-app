import { spans } from "./source-of-truth.js";
import { displayArea,userInput } from "./display-and-input-area.js";
import { appState,changeAppState } from "./app.js";

//DECLARING COUNTERS
let currentIndex = 0;
let correctChars = 0;
let incorrectChars = 0;
let totalChars = spans.length;
let highlightIndex = 0;



//TYPING ENGINE;
userInput.addEventListener("keydown",(e)=>{
    /*if (appState!=="test started"){
        changeAppState("test started");
    }*/
   console.log(e.key)
})




export {totalChars};