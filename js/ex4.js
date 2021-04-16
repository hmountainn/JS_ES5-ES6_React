window.addEventListener("load", function(){
    var section = document.querySelector("#ex4")

    var container = section.querySelector(".container");
    var boxes = section.querySelectorAll(".box");
    var button = section.querySelector("input[value='click']");

    button.onclick = function(){
        console.log("click");
    }
});