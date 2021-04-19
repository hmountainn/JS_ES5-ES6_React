window.addEventListener("load", function(){
    var section = document.querySelector("#ex4")

    var boxes = section.querySelectorAll(".box");
    var button = section.querySelector("input[value='click']");

    button.onclick = function(){
        
        var box = boxes[0];
        //css 스타일을 들고오기(box1)
        let boxStyle = window.getComputedStyle(box);
        var left = boxStyle.getPropertyValue("left");

        console.log(left);


        // //버튼 누르면 계속 튀어나오기
        // var left = 0;
        // var time = window.setInterval(function(){
        //     left++;
        //     boxes[0].style.left = left+"px";
        //     if(left == 400){ //박스 끝에서 멈추기
        //         clearInterval(time);
        //     }
        // }, 17);
    }
});