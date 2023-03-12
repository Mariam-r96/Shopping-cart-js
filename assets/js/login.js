let email = document.querySelector(".login-page .email");
let emailInvalidMessage = document.querySelector(".login-page .email~.invalid-feedback");
let passwordInvalidMessage = document.querySelector(".login-page .password~.invalid-feedback");
let password = document.querySelector(".login-page .password");
let submitBtn = document.querySelector(".login-btn");

var email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function checkValidation(){
    if(!email.value.match(email_regex)){
        console.log("error user")
        emailInvalidMessage.innerHTML = 'Please enter a valid email';
        emailInvalidMessage.classList.add('d-block');
        return false;
    }
    if(password.value.length !== 4){
        console.log("error pass")
        passwordInvalidMessage.innerHTML = 'Please enter a password of 4 characters';
        passwordInvalidMessage.classList.add('d-block');
        return false;
    } 
    if(email.value.match(email_regex) && password.value.length == 4){
        emailInvalidMessage.classList.remove('d-block');
        passwordInvalidMessage.classList.remove('d-block');
        if(email.value == "user@gmail.com" && password.value == '1234'){
            console.log("successfull")
            return true;
        } else {
            document.querySelector(".login-page .error-message").classList.remove("d-none");
            return false;
        }    
    }
   
}
