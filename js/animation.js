/**
 * Created by yos on 09/08/17.
 */
var image = document.getElementById("title-img-animated");

image.addEventListener('mousemove', function(event){
    image.style.backgroundPosition = event.pageX * -1/12 + "px " + event.pageY * -1/12 + "px";
});

image.addEventListener('mouseleave', function(event){
    image.style.backgroundPosition = "center center";
})
