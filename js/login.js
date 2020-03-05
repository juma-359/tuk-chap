const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));

function checkForm(){
    if(form.usename.value == '' && form.pass.value == ''){
        alert("Login successfull");
        // window.location = "profile.html"
        return true;
    }
}