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
    //IGNORING IRRELEVANT KEYS
    if(e.key.length>1 && e.key!=="Backspace"){return;};


    //DECLARING START OF TEST
    if (appState!=="test started"){
        changeAppState("test started");
    }

    
    //DECLARING CURRENT KEY AND CURRENT SPAN TEXT CONTENT
    const currentKey = e.key;
    const currentSpan = spans[currentIndex].textContent;


    //ACTUAL LOGIC
    if(!spans[currentIndex].hasBeenTyped){
        
        if(currentKey===currentSpan){
            correctChars++;
            spans[currentIndex].classList.add("correct");
            spans[currentIndex].hasBeenTyped = true;
            currentIndex++;  
        }
        
        else{
            incorrectChars++;
            spans[currentIndex].classList.add("incorrect");
            spans[currentIndex].hasBeenTyped = true;
            currentIndex++;
        }
    }
    else{
        if(currentKey===currentSpan){
            spans[currentIndex].classList.add("correct");
            currentIndex++;
        }
        else{
            spans[currentIndex].classList.add("incorrect");
            currentIndex++;
        }
    }

   console.log(e.key)
})




export {currentIndex,correctChars,incorrectChars,totalChars,highlightIndex};