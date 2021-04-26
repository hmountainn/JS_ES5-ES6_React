window.addEventListener("load",function(){
    var section = document.querySelector("#ex8");

    var product = section.querySelector(".product");
    product.onclick = function(e){
        if(!e.target.classList.contains("up") &&
        !e.target.classList.contains("down") &&
        !e.target.classList.contains("current"))
            return;

        console.log("gd") 
    }

});