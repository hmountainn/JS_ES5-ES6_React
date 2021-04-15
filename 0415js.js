//윈도우 로드하고 onclick발동 한번에 모으기
window.onload = function(){
    title.onclick = function onPrompt(){
        var x = prompt('x:');
        var y = prompt('y:');
        x = parseInt(x);
        y = parseInt(y);
        title.innerText = x+y;
    }  
}