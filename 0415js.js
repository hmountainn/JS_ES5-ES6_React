//윈도우 로드하고 onclick발동 한번에 모으기
window.onload = function(){
    //명명규칙을 지키기위해서 직접 가져와서 쓰기
    var asideTitle = window.document.getElementById("aside-title")

    asideTitle.onclick = function(){
        var x = prompt('x:');
        var y = prompt('y:');
        x = parseInt(x);
        y = parseInt(y);
        title.innerText = x+y;
    }  
}