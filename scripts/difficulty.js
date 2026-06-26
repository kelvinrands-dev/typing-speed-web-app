//IMPORTING STUFFS
import { appState,changeVariable } from "./app.js";
import { easy,medium,hard } from "./app-data.js";
import { loadAppDifficulty } from "./source-of-truth.js";
import { showToast } from "./interactivity.js";



//FETCHING DOM STUFFS
const easyDifficulty = document.querySelectorAll(".easy-diff");
const mediumDifficulty = document.querySelectorAll(".medium-diff");
const hardDifficulty = document.querySelectorAll(".hard-diff");
const difficultyText = document.querySelector(".diff-text");


//DECLARING REUSABLE VARIABLES OR WHATEVER
let difficultyIndex = Number(localStorage.getItem("diffIndex")) || 0;
const increaseDifficultyIndex = ()=>{
    if(difficultyIndex<9){
        difficultyIndex++;
        localStorage.setItem("diffIndex",difficultyIndex);
    }
    else{
        difficultyIndex=0;
        localStorage.setItem("diffIndex",difficultyIndex);
    }
}


//FOR DESKTOP
const activeDiff = (currentBtn)=>{
    const deskEasy = document.querySelector(".desk-easy");
    const deskMedium = document.querySelector(".desk-medium");
    const deskHard = document.querySelector(".desk-hard");
    const deskBtn = document.querySelectorAll(".desk-diff-btn");

    if(currentBtn==="easy"){
        deskBtn.forEach((btn)=>{btn.classList.remove("selected")});
        deskEasy.classList.add("selected")
    };
    if(currentBtn==="medium"){
        deskBtn.forEach((btn)=>{btn.classList.remove("selected")});
        deskMedium.classList.add("selected")
    }
    if(currentBtn==="hard"){
        deskBtn.forEach((btn)=>{btn.classList.remove("selected")});
        deskHard.classList.add("selected")
    }
    
}

//localStorage.removeItem("diffIndex");
//console.log(difficultyIndex)


//MOBILE DROPDOWN
const diffDropDownBtn = document.querySelector(".diff-dropdown-btn");
const diffDropDown = document.querySelector(".diff-dropdown-options");
const diffDropArrow = document.querySelector(".diff-drop");

diffDropDownBtn.addEventListener("click",(e)=>{
    if(appState.status !== "test started"){
        diffDropDown.classList.toggle("no-display");
        diffDropArrow.classList.toggle("animate-arrow");
    }
    else{
        showToast();
    };
    
})



//CHANGING DIFFICULTY
easyDifficulty.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(appState.status !== "test started"){
            loadAppDifficulty(easy);
            diffDropDown.classList.add("no-display");
            difficultyText.textContent="Easy";
            diffDropArrow.classList.remove("animate-arrow");
            activeDiff("easy");
        }
        else{showToast()}
    });
})

mediumDifficulty.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(appState.status !== "test started"){
            loadAppDifficulty(medium);
            diffDropDown.classList.add("no-display");
            difficultyText.textContent="Medium";
            diffDropArrow.classList.remove("animate-arrow");
            activeDiff("medium");
        }
        else{showToast()}
    });
})

hardDifficulty.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(appState.status !== "test started"){
            loadAppDifficulty(hard);
            diffDropDown.classList.add("no-display");
            difficultyText.textContent="Hard";
            diffDropArrow.classList.remove("animate-arrow");
            activeDiff("hard");
        }
        else{showToast()};
    });
})




export { diffDropDownBtn,diffDropDown,diffDropArrow,difficultyText,difficultyIndex,increaseDifficultyIndex }
