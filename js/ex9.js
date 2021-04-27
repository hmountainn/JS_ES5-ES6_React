window.addEventListener("load",function(){
    var section = document.querySelector("#ex9");

    var selButton = section.querySelector(".btn-sel");
    var fileButton = section.querySelector(".btn-file");

    selButton.onclick = function(e){
        var event = new MouseEvent("click",{
            'view' : window,
            'bubbles': true,
            'cancelable':true
        });

        fileButton.dispatchEvent(event);
    }
});