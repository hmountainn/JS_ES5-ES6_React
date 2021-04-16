window.addEventListener("load", function(){
    //querySelector로 변경
    var section = document.querySelector("#ex3")

    var span = section.querySelector(".span");
    var button = section.querySelector(".btn");

    button.onclick = function(){
        //누를때마다 1씩 줄어들기
        var num = parseInt(span.innerText);
        num--;
        span.innerText = num;
    }
});