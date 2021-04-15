window.onload = function(){
    var section = window.document.getElementById("ex1")
    var Test = section.getElementsByClassName("submit-button")[0]; //섹션중에 submit-button중이 0번째

    Test.onclick = function(){
        console.log("test")
    } 
}