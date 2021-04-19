window.addEventListener("load", function(){
    var section = document.querySelector("#ex5");

    var container = section.querySelector(".container");
    var btnAdd = section.querySelector(".btn-add");
    var btnDel = section.querySelector(".btn-del");
    var btnClone = section.querySelector(".btn-clone");

    btnAdd.onclick = function(){
        //1. 엘리먼트 객체를 생성하기
        var img = document.createElement("img");
        //2. 엘리먼트 객체의 속성 설정하기
        img.src = "../images/1.jpg";
        
        //3. 엘리먼트 객체를 문서에 추가하기
        container.appendChild(img);

    }

    btnDel.onclick = function(){
        console.log("del")
    }
    
    btnClone.onclick = function(){
        console.log("clone")
    }
});