import appData,{ easy,medium,hard } from "./app-data.js";
import { displayArea } from "./display-and-input-area.js";
import { difficultyIndex } from "./difficulty.js";



//SPLITTING APP DATA INTO CHARACTERS
let splitAppData;
let spans;
let totalChars;


//FUNCTION TO UPDATE ANYTIME
const loadAppDifficulty = (newDiff)=>{
    displayArea.replaceChildren();

    if(!splitAppData){
        splitAppData = easy[difficultyIndex].text.split("");
        totalChars = splitAppData.length;
        //console.log(totalChars)
    }
    else{
        splitAppData = newDiff[difficultyIndex].text.split("");
        totalChars = splitAppData.length;
        //console.log(totalChars)
    } 
    
    splitAppData.forEach((char)=>{
        const span = document.createElement("span");
        if(char === " "){span.classList.add("space");}
        span.textContent=char;
        span.classList.add("char-span");
        displayArea.append(span);
    });

    //FETCHING ALL SPANS
    spans = document.querySelectorAll(".char-span");
};

loadAppDifficulty();



export { splitAppData,totalChars,loadAppDifficulty,spans };