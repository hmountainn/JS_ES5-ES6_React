window.addEventListener("load", function(){
    var section = document.querySelector("#ex4")

    var boxes = section.querySelectorAll(".box");
    var button = section.querySelector("input[value='click']");

    button.onclick = function(){    
        //버튼 누르면 계속 튀어나오기
        // window.setInterval(로직, 시간(3000:3초))
        var num = 0;
        window.setInterval(function(){
            num = num+1;
            boxes[0].style.left = num+"px";
        }, 17);
    }
});