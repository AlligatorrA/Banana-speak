var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");
 var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?"

function getTranslationURL(text){
    return serverURL + "text" + text
}

function errorHandler(error){
    console.log("error occured", error)
}

outputDiv.innerText = "Anand"
function clickHandler() {
   outputDiv.innerText = "Here:-" + txtInput.value
   var inputText = txtInput.value   //taking input


fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => console.log(json.contents.translated))
.catch(errorHandler)



}

btnTranslate.addEventListener("click", clickHandler)






function clickHandler(){   
   outputDiv.innerText = "this" + txtInput.value;
} ;

btnTranslate.addEventListener("click ", clickHandler)
