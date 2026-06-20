import { spans,splitAppData } from "./source-of-truth.js";
import { displayArea,userInput } from "./display-and-input-area.js";
import { appState,changeAppState } from "./app.js";
import { modeSystem } from "./app-mode.js";
import { updateAccuracy,updateWpm } from "./accuracy-and-wpm.js";

//DECLARING COUNTERS
let currentIndex = 0;
let correctChars = 0;
let incorrectChars = 0;
let totalChars = spans.length;

//REUSABLE FUNCTIONS
const correctOrNot = (value)=>{
    spans[currentIndex].classList.add(value);
}

const addHighlight = ()=>{
    spans[currentIndex].classList.add("highlight");
}

const removeHighlight = ()=>{
    spans[currentIndex].classList.remove("highlight");
}


function followCurrentCharacter(){

    const currentSpan = spans[currentIndex];
    if(!currentSpan) return;
    const spanTop = currentSpan.offsetTop;
    const spanBottom = spanTop + currentSpan.offsetHeight;

    const visibleTop = displayArea.scrollTop;
    const visibleBottom = visibleTop + displayArea.clientHeight;

    if(spanBottom > visibleBottom){
        displayArea.scrollTop = spanBottom - displayArea.clientHeight;
    }

}


//INITIAL HIGHLIGHT
if(currentIndex===0){
    addHighlight();
};




//TYPING ENGINE;
userInput.addEventListener("input",(e)=>{


    //DECLARING START OF TEST
    if (appState.status!=="test started"){
        changeAppState("test started");
        modeSystem();
    }


    //BACKSPACE LOGIC
    if(e.inputType === "deleteContentBackward"){
        if(currentIndex>0){
            spans[currentIndex].classList.remove("highlight");
            currentIndex--;
            spans[currentIndex].classList.remove("correct","incorrect");
            spans[currentIndex].classList.add("highlight");
            return;
        }
        else{
            return;
        }
    }

    //FILTERING OUT UNWANTED INPUTS
    if(!e.data){
        return;
    }

    //DECLARING CURRENT KEY AND CURRENT SPAN TEXT CONTENT
    const currentKey = e.data;
    const currentChar = splitAppData[currentIndex];


    //REMOVE OLD HIGHLIGHT
    removeHighlight();

    //ACTUAL LOGIC
    if(!spans[currentIndex].hasBeenTyped){
        if(currentKey===currentChar){
            correctChars++;
            correctOrNot("correct");
            spans[currentIndex].hasBeenTyped = true;
            //console.log(`correct: ${correctChars}, incorrect: ${incorrectChars}`);
        }

        else{
            incorrectChars++;
            correctOrNot("incorrect");
            spans[currentIndex].hasBeenTyped = true;
            //console.log(`correct: ${correctChars}, incorrect: ${incorrectChars}`);
        }
    }

    else{
        if(currentKey===currentChar){
            correctOrNot("correct");

        }
        else{
            correctOrNot("incorrect");

        }
    }
    updateWpm();
    updateAccuracy();
    currentIndex++;

    addHighlight();
    followCurrentCharacter();

   //console.log(e.key)
})




export {currentIndex,correctChars,incorrectChars,totalChars};