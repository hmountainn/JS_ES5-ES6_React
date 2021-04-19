window.addEventListener("load", function(){
    var section = document.querySelector("#ex5");

    var btnAdd = section.querySelector(".btn-add");
    var btnDel = section.querySelector(".btn-del");
    var btnClone = section.querySelector(".btn-clone");

    btnAdd.onclick = function(){
        console.log("add")
    }

    btnDel.onclick = function(){
        console.log("del")
    }
    
    btnClone.onclick = function(){
        console.log("clone")
    }
});