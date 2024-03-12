"use strict";
const btn=document.getElementById("btn");
const getRandom =() => {
    return Math.floor(Math.random() * 256);

};
btn.addEventListener("click" , () => {
    document.body.style.background=`rgb(${getRandom()} ${getRandom()} ${getRandom()} )`;
});