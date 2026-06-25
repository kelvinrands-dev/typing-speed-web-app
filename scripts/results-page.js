const currentWpm = Number(localStorage.getItem("wpm"));
const currentAccuracy = Number(localStorage.getItem("accuracy"));
const correctChars = Number(localStorage.getItem("corrChars"));
const totalChars = Number(localStorage.getItem("totChars"));

const storedBestWpm = localStorage.getItem("bestWpm");
const parsedBestWpm = storedBestWpm === null || storedBestWpm === "" || storedBestWpm === "null"
    ? null
    : Number(storedBestWpm);

let bestWpm = parsedBestWpm;


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

    document.getElementById('share-wpm').textContent = currentWpm;
    document.getElementById('share-accuracy').textContent = `${currentAccuracy}%`;
    document.getElementById('share-correct').textContent = correctChars;
    document.getElementById('share-total').textContent = totalChars;
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

const savedBestWpm = localStorage.getItem("bestWpm");

domBestWpm.forEach((wpm)=>{
    wpm.textContent = savedBestWpm && savedBestWpm !== "null" ? savedBestWpm : 0;
})



//RESTART BUTTON
const goAgainBtn = document.querySelector(".go-again-btn");

goAgainBtn.addEventListener("click",(e)=>{
    window.location.href="index.html";
})

//SHARE BUTTON
const shareBtn = document.querySelector(".share-result-btn");

shareBtn.addEventListener('click', async () => {
    shareBtn.disabled = true;
    shareBtn.style.opacity = '0.5';
    shareBtn.style.scale = '0.95';

    const card = document.getElementById('share-card');
    const canvas = await html2canvas(card, {
        useCORS: true,
        backgroundColor: '#121212'
    });

canvas.toBlob(async (blob) => {
    const file = new File([blob], 'my-typing-results.png', { type: 'image/png' });

    try {
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({ files: [file] });
        } else {
            const link = document.createElement('a');
            link.download = 'my-typing-results.png';
            link.href = canvas.toDataURL();
            link.click();
        }
    } catch (err) {
        console.log('Share cancelled');
    } finally {
        shareBtn.disabled = false;
        shareBtn.style.opacity = '1';
        shareBtn.style.scale = '1';
    }
});});


