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
let wpmTimer = null;
let elapsedTime = 0;
let elapsedMinutes = 0;
let isWpmRunning = false;

const updateWpm = ()=>{
    if(!isWpmRunning){
        wpmTimer = setInterval(()=>{elapsedTime++},1000);
        isWpmRunning = true;
    };
    elapsedMinutes = elapsedTime/60;
    currentWpm = (correctChars / 5) / elapsedMinutes;
    currentWpm = Math.round(currentWpm);
    
    if(elapsedTime<=0){domWpm.textContent=0;}
    else{domWpm.textContent=currentWpm;}
}



export { updateAccuracy,updateWpm,currentAccuracy,currentWpm }


