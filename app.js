// // alert("cbhbsdcjj")
// //api talking with browser---user is talking to the 
// //if we want to program anything we want api,(45 time stamp)
// var btnTranslate = document.querySelector("#btn-translate");
// // console.log(btnTranslate);
// // event addEventListener, what event to listened "click event" call back if this is clicked do this
// btnTranslate.addEventListener("click", function clickEventHandler(){
//     console.log("clicked")**/*+ 
// })


var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickHandler(){
    outputDiv.innerText = "ajjsjsjsjs " + txtInput.value;
    // console.log("clicked")
    // console.log("input" , txtInput.value);
};

btnTranslate.addEventListener("click", clickHandler)
    
