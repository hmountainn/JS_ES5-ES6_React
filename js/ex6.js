window.addEventListener("load", function(){
    var section = document.querySelector("#ex6");

    var container = section.querySelector(".container");
    var btnDel = section.querySelector(".btn-del");
    var btnClone = section.querySelector(".btn-clone");
    var btnChange = section.querySelector(".btn-change");

    var selected = null;

    var boxes = container.querySelectorAll(".box");
    //박스 클릭하면 selected에 넣기
    for(let i=0; i<boxes.length; i++){
        boxes[i].onclick = function(){
            selected = boxes[i];
            console.log(selected);
        }
    }
    //selected 삭제
    btnDel.onclick = function(){
        if(selected != null)
            selected.remove();
    }
});