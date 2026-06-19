//IMPORTING STUFFS
import { appState,changeVariable } from "./app.js";
import { easy,medium,hard } from "./app-data.js";
import { loadAppDifficulty } from "./source-of-truth.js";



//FETCHING DOM STUFFS
const easyDifficulty = document.querySelectorAll(".easy-diff");
const mediumDifficulty = document.querySelectorAll(".medium-diff");
const hardDifficulty = document.querySelectorAll(".hard-diff");
const difficultyText = document.querySelector(".diff-text");


//DECLARING REUSABLE VARIABLES OR WHATEVER
let difficultyIndex = 0;


//MOBILE DROPDOWN
const diffDropDownBtn = document.querySelector(".diff-dropdown-btn");
const diffDropDown = document.querySelector(".diff-dropdown-options");

diffDropDownBtn.addEventListener("click",(e)=>{
    if(appState.status !== "test started"){
        diffDropDown.classList.toggle("no-display");
    }
    else{

    };
    
})



//CHANGING DIFFICULTY
easyDifficulty.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(appState.status !== "test started"){
            loadAppDifficulty(easy);
            diffDropDown.classList.add("no-display");
            difficultyText.textContent="Easy";
        }
    });
})

mediumDifficulty.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(appState.status !== "test started"){
            loadAppDifficulty(medium);
            diffDropDown.classList.add("no-display");
            difficultyText.textContent="Medium";
        }
    });
})

hardDifficulty.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(appState.status !== "test started"){
            loadAppDifficulty(hard);
            diffDropDown.classList.add("no-display");
            difficultyText.textContent="Hard";
        }
    });
})




export { diffDropDownBtn,diffDropDown,difficultyText,difficultyIndex }
