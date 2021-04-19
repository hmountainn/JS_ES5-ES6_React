window.addEventListener("load", function(){
    var section = document.querySelector("#ex4")

    var boxes = section.querySelectorAll(".box");
    var button = section.querySelector("input[value='click']");

    button.onclick = function(){    
        //버튼 누르면 계속 튀어나오기
        var left = 0;
        var time = window.setInterval(function(){
            left++;
            boxes[0].style.left = left+"px";
            if(left == 400){ //박스 끝에서 멈추기
                clearInterval(time);
            }
        }, 17);
    }
});