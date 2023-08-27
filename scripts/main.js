"use strict";

document.addEventListener("DOMContentLoaded", init);

function init(){
    let menu = document.getElementById("menu");
    let nav = document.querySelector("nav");
    menu.addEventListener("click", function() {
        nav.classList.toggle("hidden");
    })
}