import { appState } from "./app.js";

//FETCHING INPUT AND DISPLAY AREA
const userInput = document.querySelector("#hiddenInput");
const displayArea = document.querySelector(".display-text-area");

//LOCKING FOCUS TO INPUT
displayArea.addEventListener("click",(e)=>{
    if(appState==="getting started"){
        userInput.focus();
    }
});










export { userInput,displayArea }