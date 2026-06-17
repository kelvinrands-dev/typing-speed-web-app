import appData,{ easy,medium,hard } from "./app-data.js";
import { displayArea } from "./display-and-input-area.js";

//SPLITTING APP DATA INTO CHARACTERS
const splitAppData = easy[0].text.split("");

splitAppData.forEach((char)=>{
    const span = document.createElement("span");
    span.textContent=char===" "? "\u00A0" : char;
    span.classList.add("char-span");
    displayArea.append(span);
});

const spans = document.querySelectorAll(".char-span");



export { splitAppData,spans };