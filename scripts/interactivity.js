import { appState } from "./app.js";

const toast = document.querySelector(".toast");

let toastTimeout;


const showToast = ()=>{

    toast.classList.add("active");


    clearTimeout(toastTimeout);


    toastTimeout = setTimeout(()=>{

        toast.classList.remove("active");

    },2000);

}


export { showToast }