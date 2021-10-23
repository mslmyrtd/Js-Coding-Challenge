var i=0;
var images = ['http://lorempixel.com/400/200', 'http://lorempixel.com/400/200/sports/', 'http://lorempixel.com/400/200/sports/1'];

var duration =1000;
function slideImg(){
    document.slide.src = images[i];

    if(i < images.length){
        i++;
    }else{
        i=0;
    }
    setTimeout("slideImg()", duration);
}
window.onload =slideImg;