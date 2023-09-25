const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const showPassword = document.getElementById('showPassword')

const passIcon = document.getElementById("passIcon")
const confirmPassIcon = document.getElementById("confirmPassIcon")
const showIcon = document.getElementById("showIcon");


const showPassOpen = () => {
    passIcon.innerHTML = "<img src='/assets/lock-open-solid.svg' width='15px'>"
    confirmPassIcon.innerHTML = "<img src='/assets/lock-open-solid.svg' width='15px'>"
    showIcon.innerHTML = "<img src='/assets/eye-slash-regular.svg' width='15px'>"
};

const notShowPass = () => {
    passIcon.innerHTML = "<img src='/assets/lock-solid.svg' width='15px'>"
    confirmPassIcon.innerHTML = "<img src='/assets/lock-solid.svg' width='15px'>"
    showIcon.innerHTML = "<img src='/assets/eye-regular.svg' width='15px'>"
};



// Validando a senha
function validatePassword() {
    if (password.value !== confirm_password.value) {
        confirm_password.setCustomValidity("Senhas diferentes.");
    } else {
        confirm_password.setCustomValidity('')
    };
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


// mostrando senha e mudando icones

showPassword.addEventListener('change', function() {
    if (showPassword.checked) {
      password.type = 'text';
      confirm_password.type = 'text'; 
        // icones
      showPassOpen()
    } else {
      password.type = 'password';
      confirm_password.type = 'password';
      
      // icones
      notShowPass()
    }
});

