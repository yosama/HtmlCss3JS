/**
 * Created by yos on 13/08/17.
 */
var form = document.getElementsByTagName('form')[0];
var firstnameInput = document.getElementById("firstname");
var lastnameInput = document.getElementById("lastname");
var emailInput = document.getElementById("email");
var armyInput = document.getElementById("army");
var dateInput = document.getElementById("date");
var btnSend = document.getElementById("btnSend");

var missionInput = {
    missionOne: document.getElementById("mission_type_1"),
    missionTwo: document.getElementById("mission_type_2"),
    missionThree: document.getElementById("mission_type_3")
};

var loadingIcon = document.createElement('i');
loadingIcon.classList.add("fa", "fa-spinner", "fa-spin");


form.addEventListener("submit", function(event){
    event.preventDefault()
    if (firstnameInput.checkValidity() === false){
        alert("Write your firstname");
        firstnameInput.focus();
        return false;
    }

    if (lastnameInput.checkValidity() === false){
        alert("Write your lastname");
        lastnameInput.focus();
        return false;
    }

    if (emailInput.checkValidity() === false){
        alert("Write an email correct");
        emailInput.focus();
        return false;
    }

    if (missionInput.missionOne.checkValidity() === false) {
        alert("Select the mission type");
        return false;
    }

    if (armyInput.checkValidity() === false) {
        alert("Write the army size");
        armyInput.focus();
        return false;
    }
    if (dateInput.checkValidity() === false) {
        alert("Select a correct date");
        dateInput.focus();
        return false;
    }

    btnSend.setAttribute("disabled","");
    btnSend.appendChild(loadingIcon);
    event.preventDefault();

    setTimeout(function(){
        form.reset();
        btnSend.removeAttribute("disabled");
        btnSend.removeChild(loadingIcon);
    },1000);


})

