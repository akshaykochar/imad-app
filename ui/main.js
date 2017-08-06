console.log('Loaded!');

var img = document.getElementById('modi');
var margin_left = 0 ;
function moveRight(){
    margin_left = margin_left + 1;
    img.style.marginLeft = margin_left + 'px' ;
}
img.onclick = function(){
    var interval = setInterval(moveRight, 15);
};
