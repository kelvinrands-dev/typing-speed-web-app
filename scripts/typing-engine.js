import { spans,splitAppData } from "./source-of-truth.js";
import { displayArea,userInput } from "./display-and-input-area.js";
import { appState,changeAppState } from "./app.js";

//DECLARING COUNTERS
let currentIndex = 0;
let correctChars = 0;
let incorrectChars = 0;
let totalChars = spans.length;
let highlightIndex = 0;

//REUSABLE FUNCTIONS
const correctOrNot = (value)=>{
    spans[currentIndex].classList.add(value);
    highlightIndex++;
}

const addHighlight = ()=>{
    spans[highlightIndex].classList.add("highlight");
}

const removeHighlight = ()=>{
    spans[highlightIndex].classList.remove("highlight");
}


//INITIAL HIGHLIGHT
if(currentIndex===0){
    addHighlight();
};


//TYPING ENGINE;
userInput.addEventListener("keydown",(e)=>{

    //IGNORING IRRELEVANT KEYS
    if(e.key.length>1 && e.key!=="Backspace"){return;};


    //DECLARING START OF TEST
    if (appState!=="test started"){
        changeAppState("test started");
    }

    
    //DECLARING CURRENT KEY AND CURRENT SPAN TEXT CONTENT
    const currentKey = e.key;
    const currentSpan = splitAppData[currentIndex];

    //REMOVE OLD HIGHLIGHT
    removeHighlight();

    //ACTUAL LOGIC
    if(!spans[currentIndex].hasBeenTyped){
        
        if(currentKey===currentSpan){
            correctChars++;
            correctOrNot("correct");
            spans[currentIndex].hasBeenTyped = true;


        }

        else{
            incorrectChars++;
            correctOrNot("incorrect");
            spans[currentIndex].hasBeenTyped = true;

        }
    }

    else{
        if(currentKey===currentSpan){
            correctOrNot("correct");

        }
        else{
            correctOrNot("incorrect");

        }
    }

    currentIndex++;

    addHighlight();

   console.log(e.key)
})




export {currentIndex,correctChars,incorrectChars,totalChars,highlightIndex};