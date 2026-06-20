const currentWpm = Number(localStorage.getItem("wpm"));
const currentAccuracy = Number(localStorage.getItem("accuracy"));
const correctChars = Number(localStorage.getItem("corrChars"));
const totalChars = Number(localStorage.getItem("totChars"));

let bestWpm = localStorage.getItem("bestWpm");
bestWpm = Number(bestWpm);


//FETCHING DOM
const testComplete = document.querySelector(".test-complete");
const baselineEstablished = document.querySelector(".baseline-established");
const highScoreSmashed = document.querySelector(".high-score-smashed");

const domWpm = document.querySelector(".current-wpm");
const domAccuracy = document.querySelector(".accuracy");
const domCorrect = document.querySelector(".correct-characters");
const domTotal = document.querySelector(".total-characters");

//REUSABLE FUNCTIONS
const updateDom = ()=>{
    domWpm.textContent=currentWpm;
    domAccuracy.textContent=`${currentAccuracy}%`;
    domCorrect.textContent = correctChars;
    domTotal.textContent = totalChars;
}
const displayScreen = (displayMe)=>{
    baselineEstablished.classList.add("no-display");
    highScoreSmashed.classList.add("no-display");
    testComplete.classList.add("no-display");

    displayMe.classList.remove("no-display");
}


if (bestWpm===null){
    displayScreen(baselineEstablished)
    updateDom();
    localStorage.setItem("bestWpm",currentWpm);
}
else{
    if(currentWpm>bestWpm){
        displayScreen(highScoreSmashed);
        updateDom();
        localStorage.setItem("bestWpm",currentWpm);
        //console.log(`greater than`)
    }
    else{
        displayScreen(testComplete)
        updateDom();
        //console.log(`less than`)
    }
};

const domBestWpm = document.querySelectorAll(".best-wpm");

domBestWpm.forEach((wpm)=>{
    wpm.textContent = localStorage.getItem("bestWpm") || 0;
})



//RESTART BUTTON
const goAgainBtn = document.querySelector(".go-again-btn");

goAgainBtn.addEventListener("click",(e)=>{
    window.location.href="index.html";
})
