window.addEventListener("load", function(){
    var section = window.document.getElementById("ex2");
    var span = section.getElementsByClassName("span")[0];
    var button = section.getElementsByClassName("btn")[0];

    button.onclick = function(){
        console.log("test")
    }
});