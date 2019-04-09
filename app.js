// slideshow code
var i = 0; 
var images = [];
var time = 4000;

//image list
images[0] = 'pictures/velvet.jpeg'
images[1] = 'pictures/candies.jpg'
images[2] = 'pictures/cake.jpg'

//change the image
function changingImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i=0;
    }

    setTimeout("changingImg()", time);

}

window.onload = changingImg;