
/**
 * Created by yos on 09/08/17.
 */

var navbarItems = document.getElementsByClassName("navbar-item");

console.log(navbarItems);

for (var i = 0; i < navbarItems.length; i ++) {
    navbarItems[i].addEventListener('click', function(){
        var sectionToGo = this.getElementsByTagName('a')[0].href.split("#");
        deleteClassActive();
        this.classList.add('active');
        if (sectionToGo.length === 2) {
            event.preventDefault();
            var goTo = sectionToGo[sectionToGo.length - 1];
            getElementByIdAndScroll(goTo)
        }
    });
}

function getElementByIdAndScroll (elementId) {
    var element;

    if (elementId === '') {
        element = document.getElementsByClassName("header")[0];
    } else {
        element = document.getElementById(elementId);
    }
    scrollToElement(element);
}

function scrollToElement(element) {
    var distance = parseInt(element.getBoundingClientRect().top * 0.3);
    console.log(distance);
    document.body.scrollTop += distance;

    if (!element.lastDistance || element.lastDistance > Math.abs(distance)) {
        element.lastDistance = Math.abs(distance);
        setTimeout(function (){
            scrollToElement(element);
        }, 50);
    } else {
        element.lastDistance = null;
    }
}

function deleteClassActive (){
    for (var i = 0; i < navbarItems.length; i ++) {
        navbarItems[i].classList.remove('active');
    }
}

var accumulativeOffset = function (element) {
    var top = 0;
    do {
        top += element.offsetTop || 0;
        element = element.offsetParent;
    } while (element)
    return top;
}

var offsetAboutMe = accumulativeOffset(document.getElementById("about-me")) - 50;
var offsetTeam = accumulativeOffset(document.getElementById("team")) - 50;
var offsetTransport = accumulativeOffset(document.getElementById("transport")) - 50;
var navbar = document.getElementsByClassName("navbar")[0];

window.addEventListener('scroll', changeMenuStyle);

var previous;
function changeMenuStyle (){
    var pageOffset = window.pageYOffset;

    if (pageOffset >= 0 && pageOffset < offsetAboutMe) {
        if (!previous || previous !== 1 ){
            previous = 1;
        } else if (previous === 1){
            return false;
        }
        deleteClassActive()
        document.querySelector('a[href="#"]').parentNode.classList.add('active');
        console.log("misma seccion");
    } else if (pageOffset >= offsetAboutMe && pageOffset < offsetTeam) {
        if (!previous || previous !== 2){
            previous = 2;
        } else if (previous === 2){
            return false;
        }
        deleteClassActive()
        document.querySelector('a[href$="about-me"]').parentNode.classList.add('active');
        console.log("misma seccion");
    } else if (pageOffset >= offsetTeam && offsetAboutMe < offsetTransport) {
        if (!previous || previous !== 3 ){
            previous = 3;
        } else if (previous === 3){
            return false;
        }
        deleteClassActive()
        document.querySelector('a[href$="team"]').parentNode.classList.add('active');
        console.log("misma seccion");
    }
}
