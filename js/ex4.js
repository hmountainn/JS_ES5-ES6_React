window.addEventListener("load", function(){
    var section = document.querySelector("#ex4")

    var container = section.querySelector(".container");
    var boxes = section.querySelectorAll(".box");
    var button = section.querySelector("input[value='click']");

    button.onclick = function(){
        //버튼 누르면 파란색원 위치바꾸기
        boxes[0].style.left = "100px";
    }
});