window.addEventListener("load", function(){
    var middle = document.querySelector(".middle");
    var result = document.querySelector(".result");
    
    var first = document.querySelectorAll(".first");
    var second = document.querySelectorAll(".second");
    var third = document.querySelectorAll(".third");
    var fourth = document.querySelectorAll(".fourth");


    first[0].onclick = function(){
        result.innerText += 7;
    }
    first[1].onclick = function(){
        result.innerText += 8;
    }
    first[2].onclick = function(){
        result.innerText += 9;
    }
    first[3].onclick = function(){
        result.innerText += "*";
    }

    second[0].onclick = function(){
        result.innerText += 4;
    }
    second[1].onclick = function(){
        result.innerText += 5;
    }
    second[2].onclick = function(){
        result.innerText += 6;
    }
    second[3].onclick = function(){
        result.innerText += "-";
    }

    third[0].onclick = function(){
        result.innerText += 1;
    }
    third[1].onclick = function(){
        result.innerText += 2;
    }
    third[2].onclick = function(){
        result.innerText += '3';
    }
    third[3].onclick = function(){
        result.innerText += "+";
    }

    fourth[0].onclick = function(){
        result.innerText = "";
        middle.innerText = "";
    }
    fourth[1].onclick = function(){
        result.innerText += 0;
    }
    fourth[2].onclick = function(){
        var final = eval(result.innerText);
        middle.innerText = final;
    }
    fourth[3].onclick = function(){
        result.innerText += "/";
    }
});