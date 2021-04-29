window.addEventListener("load",function(){
    var requestButton = document.querySelector(".btn-request");

    requestButton.onclick = function(){
        var request = new XMLHttpRequest(); //요청도구

        request.open("GET", "http://localhost:8080/api/notice/list", false); //false: 비동기방식
        request.send(null);

        console.log(request.responseText);
    }

})