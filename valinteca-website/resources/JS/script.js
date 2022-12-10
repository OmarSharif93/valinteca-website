/*get started redirection*/
document.getElementById("start").onclick = function () {
    location.href = "signup.html";
}

/*Validation*/
var nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('pswd-error');
let confirmPasswordError = document.getElementById('pswd-conf-error');

function validateName(){
    var name = document.getElementById('user-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^a-z0-9A-Z/)){
        nameError.innerHTML = 'Username must consist of 5 to 15 characters, only letters and numbers are allowed, with no numbers at the beginning or the end';
        return false;
    }
    nameError.innerHTML = 'valid!';
    return true;
}

function validateEmail(){
    var email = document.getElementById('user-email').value;
    
    if(email.length == 0){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    emailError.innerHTML = "valid!";
    return true;
}
