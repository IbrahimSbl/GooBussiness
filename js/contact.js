// Get input fields and textarea
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var subjectInput = document.getElementById("subject");
var messageTextarea = document.getElementById("message");
//Get .form-group for email and name
var groupForm = document.querySelectorAll(".form-group");
// Get .textarea-group for message
var textareaGroup = document.querySelector(".textarea-group");
// Flag to check if the user has submitted valid data
let nameIsValid = true;
let emailIsValid = true;
let subjectIsValid = true;
let messageIsValid = true;
//onsubmit validate the input fields
function validateInputs(event) {
  checkName();
  checkEmail();
  checkSubject();
  checkMessage();
  //if any field is invalid prevent submission or the form
  if (!nameIsValid || !emailIsValid || !subjectIsValid || !messageIsValid) {
    event.preventDefault();
  }
}

function checkName() {
  let nameValue = nameInput.value.trim();
  //If there is no data and there is no already an error message
  //Show an error message
  if (nameValue === "" && groupForm[0].childElementCount <= 2) {
    var newElement = document.createElement("span");
    newElement.innerHTML =
      '<label id="name-error" class="error" for="name">Please enter a name</label>';
    groupForm[0].appendChild(newElement);
    // raise the  flag that there is an error
    nameIsValid = false;
  } else if (nameValue !== "") {
    //else if there is no error remove error message if any
    let nameError = groupForm[0].querySelector("#name-error");
    if (nameError !== null) {
      nameError.parentElement.remove();
      //release the flag when removing the error
      nameIsValid = true;
    }
  }
}
function checkEmail() {
  let emailValue = emailInput.value;
  let check = true;
  try {
    check = isValidEmail(emailValue.trim());
  } catch (e) {
    console.log(e);
  }
  //If there is no data or email invalid there is no already an error message
  //Show an error message
  if (!check && groupForm[1].childElementCount <= 2) {
    var newElement = document.createElement("span");
    newElement.innerHTML =
      '<label id="email-error" class="error" for="email">Please enter a valid email address</label>';
    groupForm[1].appendChild(newElement);
    // raise the  flag that there is an error
    emailIsValid = false;
  } else if (check) {
    //else if there is no error remove error message if any
    let emailError = groupForm[1].querySelector("#email-error");
    if (emailError !== null) {
      emailError.parentElement.remove();
      //release the flag when removing the error
      emailIsValid = true;
    }
  }
}
function checkSubject() {
    let subjectValue = subjectInput.value.trim();
    //If there is no data and there is no already an error message
    //Show an error message
    if (subjectValue === "" && groupForm[3].childElementCount <= 2) {
      var newElement = document.createElement("span");
      newElement.innerHTML =
        '<label id="subject-error" class="error" for="subject">Please enter a subject</label>';
      groupForm[3].appendChild(newElement);
      // raise the  flag that there is an error
      subjectIsValid = false;
    } else if (subjectValue !== "") {
      //else if there is no error remove error message if any
      let subjectError = groupForm[3].querySelector("#subject-error");
      if (subjectError !== null) {
        subjectError.parentElement.remove();
        //release the flag when removing the error
        subjectIsValid = true;
      }
    }
  }
function checkMessage() {
  let message = messageTextarea.value.trim();
  //If there is no data and there is no already an error message
  //Show an error message
  if (message === "" && textareaGroup.childElementCount <= 2) {
    var newElement = document.createElement("span");
    newElement.innerHTML =
      '<label id="message-error" class="error" for="message">Please enter a message</label>';
    textareaGroup.appendChild(newElement);
    // raise the  flag that there is an error
    messageIsValid = false;
  } else if (message !== "") {
    //else if there is no error remove error message if any
    let messageError = textareaGroup.querySelector("#message-error");
    if (messageError !== null) {
      messageError.parentElement.remove();
      //release the flag when removing the error
      messageIsValid = true;
    }
  }
}
function isValidEmail(email) {
  var emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
  return emailRegex.test(email);
}
