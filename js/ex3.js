window.addEventListener("load", function(){
    //querySelector로 변경
    var section = document.querySelector("#ex3")

    var span = section.querySelector(".span");
    var button = section.querySelector(".btn");

    button.onclick = function(){
        console.log("test")
    }
});