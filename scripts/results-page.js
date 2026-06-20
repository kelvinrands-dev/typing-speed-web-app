const currentWpm = Number(localStorage.getItem("wpm"));
const currentAccuracy = Number(localStorage.getItem("accuracy"));
const correctChars = Number(localStorage.getItem("corrChars"));
const totalChars = Number(localStorage.getItem("totChars"));

let bestWpm = 0;


//FETCHING DOM
const testComplete = document.querySelector(".test-complete");
const baselineEstablished = document.querySelector(".baseline-established");
const highScoreSmashed = document.querySelector(".high-score-smashed");

const domWpm = document.querySelector(".current-wpm");
const domAccuracy = document.querySelector(".accuracy");
const domCorrect = document.querySelector(".correct-characters");
const domTotal = document.querySelector(".total-characters");

const updateDom = ()=>{
    domWpm.textContent=currentWpm;
    domAccuracy.textContent=`${currentAccuracy}%`;
    domCorrect.textContent = correctChars;
    domTotal.textContent = totalChars;
}


if (bestWpm===0){
    baselineEstablished.classList.remove("no-display");
    updateDom();
}

