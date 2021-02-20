const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const validationMessage = document.querySelector(".validation-message");

function validateForm(event) {
    event.preventDefault();

    var formIsValid = true;

    if (checkLength(fullName.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        formIsValid = false;
    }

    if (checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
        formIsValid = false;
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        formIsValid = false;
    }

    if (checkLength(address.value, 24) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
        formIsValid = false;
    }

    if (formIsValid === true) {
        validationMessage.style.display = "block";
        console.log("Congrats! You filled out the form correctly");
    } 

}


form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}