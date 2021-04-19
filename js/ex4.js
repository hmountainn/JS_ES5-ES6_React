window.addEventListener("load", function(){
    var section = document.querySelector("#ex4")

    var boxes = section.querySelectorAll(".box");
    var button = section.querySelector("input[value='click']");

    button.onclick = function(){    
        //버튼 누르면 계속 튀어나오기
        // window.setInterval(로직, 시간(3000:3초))
        var left = 0;
        var time = window.setInterval(function(){
            left++;
            boxes[0].style.left = left+"px";
            if(left == 400){
                clearInterval(time);
            }
        }, 17);
    }
});