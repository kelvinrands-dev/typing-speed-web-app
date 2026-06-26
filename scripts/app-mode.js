import { appState,changeAppState, endTest } from "./app.js";
import { showToast } from "./interactivity.js";


//FOR DESKTOP
const activeMode = (currentBtn)=>{
    const deskPassage = document.querySelector(".desk-passage");
    const deskTimed = document.querySelector(".desk-timed");
    const deskMode = document.querySelectorAll(".desk-mode-btn");

    if(currentBtn==="passage"){
        deskMode.forEach((btn)=>{btn.classList.remove("selected")});
        deskPassage.classList.add("selected")
    };
    if(currentBtn==="timed"){
        deskMode.forEach((btn)=>{btn.classList.remove("selected")});
        deskTimed.classList.add("selected")
    }
    
}


//MOBILE DROPDOWN
const modeBtnText = document.querySelector(".mode-btn-text")
const modeBtn = document.querySelector(".timemode-dropdown-btn");
const modeDrop = document.querySelector(".timemode-dropdown-options");
const modeArrow = document.querySelector(".mode-arrow");
modeBtn.addEventListener("click",(e)=>{
    if(appState.status !== "test started"){
        modeDrop.classList.toggle("no-display");
        modeArrow.classList.toggle("animate-arrow")
    }
    else{
        showToast();
    };
    
})

//MODE-SYSTEM
const currentTime = document.querySelector(".time-taken");

const passageMode = document.querySelectorAll(".passage");
const timedMode = document.querySelectorAll(".timed");
let currentMode = "passage";

    //HIDDEN CLOCKS
let elapsedTime = 0;
let timeRemaining = 60;
let timer=null;

const modeSystem = ()=>{
    clearInterval(timer);

    if(currentMode==="passage"){
        let minutes=0;
        let seconds=0;
    
        timer = setInterval(()=>{
            elapsedTime++;
            minutes = Math.floor(elapsedTime/60);
            seconds = elapsedTime % 60;
            seconds = String(seconds).padStart(2,"0");

            currentTime.textContent = `${minutes}:${seconds}`;

        },1000);
    }
    
    else{
        let minutes=0;
        let seconds=0;
    
        timer = setInterval(()=>{
            timeRemaining--;

            //FAILSAFE
            if (timeRemaining<=0){
                clearInterval(timer);
                currentTime.textContent=`0:00`;
                changeAppState("test ended");
                endTest();
            };

            minutes = Math.floor(timeRemaining/60);
            seconds = timeRemaining % 60;
            seconds = String(seconds).padStart(2,"0");

            currentTime.textContent = `${minutes}:${seconds}`;

        },1000);
    }
}



passageMode.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(appState.status === "test started"){showToast();return}
        currentMode="passage";
        currentTime.textContent=`0:00`;
        modeArrow.classList.remove("animate-arrow");
        modeDrop.classList.add("no-display");
        modeBtnText.textContent="Passage";
        activeMode("passage")
    })
});

timedMode.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(appState.status === "test started"){showToast(); return};
        currentMode="timed";
        currentTime.textContent=`1:00`;
        modeArrow.classList.remove("animate-arrow");
        modeDrop.classList.add("no-display");
        modeBtnText.textContent="Timed(60s)";
        activeMode("timed");
    })
})





export { modeBtn,modeDrop,modeArrow,modeSystem,timer }