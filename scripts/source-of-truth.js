import appData,{ easy,medium,hard } from "./app-data.js";

//SPLITTING APP DATA INTO CHARACTERS
const splitData = easy[0].text.split("");

//FETCHING DISPLAY AREA
const display = document.querySelector(".display-text-area");


const spans = [];

splitData.forEach((char)=>{
    const span = document.createElement("span");
    span.textContent=char;
    span.classList.add("char-span");
    display.append(span);
    spans.push(char);
})

console.log(spans);



export { splitData,spans,display }