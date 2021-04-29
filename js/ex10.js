window.addEventListener("load",function(){
    var requestButton = document.querySelector(".btn-request");

    requestButton.onclick = function(){
        var request = new XMLHttpRequest(); //요청도구

        request.open("GET", "ex10.txt", false);
        request.send(null);

        console.log(request.responseText);
    }

})