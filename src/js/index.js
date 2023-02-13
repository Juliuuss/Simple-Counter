import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

let counter=0;
let counterA=0;
let counterB=0;
let counterC=0;
let counterD=0;
let counterE=0;

setInterval(()=>{
    if (counter > 9) {counter = 0; counterA++}
    if (counterA > 9) {counterA = 0; counterB++}
    if (counterB > 9) {counterB = 0; counterC++}
    if (counterC > 9) {counterC = 0; counterD++}
    if (counterD > 9) {counterD = 0; counterE++}


    ReactDOM.render(<Home
         counter={counter++}
         counter1={counterA}
         counter2={counterB}
         counter3={counterC}
         counter4={counterD}
         counter5={counterE} />, 
    document.querySelector("#app"))},100)

