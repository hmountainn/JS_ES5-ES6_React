window.addEventListener("load", function(){
    var section = document.querySelector("#ex5");

    var container = section.querySelector(".container");
    var btnAdd = section.querySelector(".btn-add");
    var btnDel = section.querySelector(".btn-del");
    var btnClone = section.querySelector(".btn-clone");

    btnAdd.onclick = function(){
        // //1. 엘리먼트 객체를 생성하기
        // var img = document.createElement("img");
        // //2. 엘리먼트 객체의 속성 설정하기
        // img.src = "../images/1.jpg";
        
        // //3. 엘리먼트 객체를 문서에 추가하기
        // container.appendChild(img);

        //1. 엘리먼트 객체를 생성하기
        var div = document.createElement("div");
        // var txt = document.createTextNode("하위"); //텍스트 추가
        
        //2. 엘리먼트 객체의 속성 설정하기
        div.style.backgroundColor = "blue";
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.borderRadius = "50px";
        //텍스트 스타일 설정
        div.style.textAlign = "center";
        div.style.color = "#fff";
        div.style.lineHeight = "100px";

        // div.appendChild(txt); //div안에 텍스트 넣기
        div.append("2"); //append활용

        //3. 엘리먼트 객체를 문서에 추가하기
        // container.appendChild(div);
        container.append(div); //append활용
    }

    //노드삭제
    btnDel.onclick = function(){
        var div  = container.querySelector("div:first-child");
        // container.removeChild(div);
        div.remove(); //removeChild대체
    }
    
    //노드복제
    btnClone.onclick = function(){
        var div = container.querySelector("div:first-child");
        var clone = div.cloneNode(true); //true없으면 자식은 빼고 복제됨
        container.append(clone);
    }
});