var input_btn = document.getElementById("input-text");
var translate_btn = document.querySelector(".translate-groot #translate");
var output_text = document.querySelector(".translate-groot .output");

var serverURL = "https://api.funtranslations.com/translate/groot.json";

function getURL() {
    return serverURL + "?" + "text=" + input_btn.value;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickEventHandler() {
    fetch(getURL())
    .then(response => response.json())
    .then(data => output_text.innerText = data.contents.translated)
    .catch(errorHandler);
};

translate_btn.addEventListener("click", clickEventHandler);