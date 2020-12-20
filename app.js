// // // alert("cbhbsdcjj")
// // //api talking with browser---user is talking to the 
// // //if we want to program anything we want api,(45 time stamp)
// // var btnTranslate = document.querySelector("#btn-translate");
// // // console.log(btnTranslate);
// // // event addEventListener, what event to listened "click event" call back if this is clicked do this
// // btnTranslate.addEventListener("click", function clickEventHandler(){
// //     console.log("clicked")**/*+ 
// // })


// var btnTranslate = document.querySelector("#btn-translate");
// var txtInput = document.querySelector("#txt-input");
// var outputDiv = document.querySelector("#output");

// // var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
// var serverURL = "https://api.funtranslations.com/translate/minion.json"

// function getTranslationURL(text){
//     return serverURL + "?" + "text" + text
// }
// function errorHandler(error){
//     console.log("error occured" + error)
// }

// function clickHandler(){
//     // outputDiv.innerText = "ajjsjsjsjs" + txtInput.value;
//     // console.log("clicked")
//     // console.log("input" , txtInput.value);
//     var inputText = txtInput.value;
//     fetch(getTranslationURL(inputText))
//       .then(response => response.json())
//       .then(json => 
//         {
//             var translatedText = json.contents.translated;
//             outputDiv.innerText = translatedText;

//         })
//       .catch(errorHandler)
// };

// btnTranslate.addEventListener("click", clickHandler)
    


var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)