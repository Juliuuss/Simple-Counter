//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let counter=0;
let counterA=0;

setInterval(()=>{
    if (counter > 9) counterA++;
    ReactDOM.render(<Home counter={counter++} counter1={counterA} />, 
    document.querySelector("#app"))},1000)



//render your react application
ReactDOM.render(<Home counter={counter} />, document.querySelector("#app"));