window.addEventListener("load",function(){
    var section = document.querySelector("#ex8");

    var product = section.querySelector(".product");
    product.onclick = function(e){
        var item = e.target;
        if(!item.classList.contains("up") &&
        !item.classList.contains("down") &&
        !item.classList.contains("current"))
            return;

        if(item.classList.contains("up")){
            var input = item.parentElement.querySelector("input");
            input.value = parseInt(input.value)+1;
        }
        else if(item.classList.contains("down")){
            var input = item.parentElement.querySelector("input");
            input.value = parseInt(input.value)-1;
        }
        else if(item.classList.contains("current")){
            item.parentElement.style.border = "2px dotted #000";
        }
    }
});