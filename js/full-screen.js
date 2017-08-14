/**
 * Created by yos on 14/08/17.
 */

document.getElementById("video").addEventListener('click', function(event){
    launchFullscreen(this);
    this.play();
});

function launchFullscreen(element) {
    if(element.requestFullscreen) {
        element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullscreen () {
    if(element.exitFullscreen) {
        element.exitFullscreen();
    } else if(element.mozCancelFullScreen) {
        element.mozCancelFullScreen();
    } else if(element.webkitExitFullscreen) {
        element.webkitExitFullscreen();
    } else if(element.msExitFullscreen) {
        element.msExitFullscreen();
    }
}

