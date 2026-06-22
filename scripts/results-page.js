const currentWpm = Number(localStorage.getItem("wpm"));
const currentAccuracy = Number(localStorage.getItem("accuracy"));
const correctChars = Number(localStorage.getItem("corrChars"));
const totalChars = Number(localStorage.getItem("totChars"));

let bestWpm = localStorage.getItem("bestWpm");


//FETCHING DOM
const testComplete = document.querySelector(".test-complete");
const baselineEstablished = document.querySelector(".baseline-established");
const highScoreSmashed = document.querySelector(".high-score-smashed");

const domWpm = document.querySelector(".current-wpm");
const domAccuracy = document.querySelector(".accuracy");
const domCorrect = document.querySelector(".correct-characters");
const domTotal = document.querySelector(".total-characters");

//EXTRA
const btnText = document.querySelector(".btn-text")

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

//ANIMATIONS
function triggerConfetti(){
    setTimeout(() => {
        confetti({
            particleCount: 75,
            spread: 60,
            origin: { x: 0, y: 1 },
            angle: 60,
        });
        confetti({
            particleCount: 75,
            spread: 60,
            origin: { x: 1, y: 1 },
            angle: 120,
        });
    }, 0);
}
function triggerCheckmarkAnimation(){
    gsap.from(".checkmark-wrapper", {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(1.7)"
    });

    gsap.to(".checkmark-wrapper", {
        boxShadow: "0 0 0 20px rgba(77, 214, 123, 0)",
        duration: 0.6,
        delay: 0.4,
        ease: "power2.out"
    });
}


if (bestWpm===null){
    displayScreen(baselineEstablished);
    updateDom();
    localStorage.setItem("bestWpm",currentWpm);
    triggerCheckmarkAnimation();
}
else{
    bestWpm = Number(bestWpm);
    if(currentWpm>bestWpm){
        displayScreen(highScoreSmashed);
        updateDom();
        btnText.textContent="Beat This Score";
        localStorage.setItem("bestWpm",currentWpm);
        triggerConfetti();
        //console.log(`greater than`)
    }
    else{
        displayScreen(testComplete)
        updateDom();
        triggerCheckmarkAnimation();
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
