window.addEventListener("load",function(){
    var section = document.querySelector("#ex9");

    var uploadBox = section.querySelector(".upload-box")
    var selButton = section.querySelector(".btn-sel");
    var fileButton = section.querySelector(".btn-file");

    //darg이벤트
    uploadBox.ondragenter = function(){
        console.log("enter");
    }

    uploadBox.ondragleave = function(){
        console.log("leave");
    }

    //가짜버튼 누르면 진짜업로드버튼 실행
    selButton.onclick = function(e){
        var event = new MouseEvent("click",{
            'view' : window,
            'bubbles': true,
            'cancelable':true
        });

        fileButton.dispatchEvent(event);
    }
});