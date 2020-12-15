// // alert("cbhbsdcjj")
// //api talking with browser---user is talking to the 
// //if we want to program anythig we want api,,45time stamp
// var btnTranslate = document.querySelector("#btn-translate");
// // console.log(btnTranslate);
// // event addEventListener, what event to listened "click event" call back if this is clicked do this
// btnTranslate.addEventListener("click", function clickEventHandler(){
//     console.log("clicked")
// })


var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")

function clickHandler(){
    console.log("clicked")
    console.log("input" , txtInput.value);
};

btnTranslate.addEventListener("click", clickHandler)
    
