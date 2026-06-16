import appData,{ easy,medium,hard } from "./app-data.js";
import { displayArea } from "./display-and-input-area.js";

//SPLITTING APP DATA INTO CHARACTERS
const splitAppData = easy[0].text.split("");

const spans = [];

splitAppData.forEach((char)=>{
    const span = document.createElement("span");
    span.textContent=char;
    span.classList.add("char-span");
    displayArea.append(span);
    spans.push(char);
})


export { splitAppData,spans }