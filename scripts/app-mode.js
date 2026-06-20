import { appState,changeAppState, endTest } from "./app.js";

//MOBILE DROPDOWN
const modeBtnText = document.querySelector(".mode-btn-text")
const modeBtn = document.querySelector(".timemode-dropdown-btn");
const modeDrop = document.querySelector(".timemode-dropdown-options");
modeBtn.addEventListener("click",(e)=>{
    if(appState.status !== "test started"){
        modeDrop.classList.toggle("no-display");
    }
    else{

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
        if(appState.status === "test started"){return}
        currentMode="passage";
        currentTime.textContent=`0:00`;
        modeDrop.classList.add("no-display");
        modeBtnText.textContent="Passage";
    })
});

timedMode.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(appState.status === "test started"){return};
        currentMode="timed";
        currentTime.textContent=`1:00`;
        modeDrop.classList.add("no-display");
        modeBtnText.textContent="Timed(60s)";
    })
})





export { modeBtn,modeSystem,timer }