import { correctChars,incorrectChars } from "./typing-engine.js";

//FETCHING DOMS
const domWpm = document.querySelector(".current-wpm");
const domAccuracy = document.querySelector(".accuracy");


//DECLARING GLOBALS
let currentAccuracy = 0;
let currentWpm = 0;

//ACCURACY
const updateAccuracy = ()=>{
    currentAccuracy = (correctChars / (correctChars + incorrectChars)) * 100;
    currentAccuracy = Math.round(currentAccuracy);
    domAccuracy.textContent=`${currentAccuracy}%`
}


//WPM




export { updateAccuracy,currentAccuracy,currentWpm }


