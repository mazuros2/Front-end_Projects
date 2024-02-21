const body = document.querySelector("body");
        
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const nightmodeSwitch = body.querySelector(".toggle-switch");
const nightmodeText = body.querySelector(".nightmode-text");

nightmodeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");
});