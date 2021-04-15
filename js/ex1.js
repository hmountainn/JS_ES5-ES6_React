window.onload = function(){
    var section = window.document.getElementById("ex2");
    var button = section.getElementsByClassName("submit-button")[0];



    button.onclick = function(){
        var x = section.getElementsByClassName("x")[0];
        var y = section.getElementsByClassName("y")[0];
        var result = section.getElementsByClassName("result")[0];

        x = parseInt(x.value);
        y = parseInt(y.value);

        result.innerText = x+y;
    }
}



// window.onload = function(){
//     var section = window.document.getElementById("ex1");
//     var Test = section.getElementsByClassName("submit-button")[0]; //섹션중에 submit-button중이 0번째

//     Test.onclick = function(){
//         console.log("test");
//     } 
// };