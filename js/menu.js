
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