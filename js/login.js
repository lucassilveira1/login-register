const login = document.getElementById('login');
const password = document.getElementById('password');
const resetBTN = document.getElementById('reset');
const showPassword = document.getElementById("showPass")

const passwordIcon = document.getElementById("passIcon")
const checkIcon = document.getElementById("showPassIcon")

const click = () => {
    passwordIcon.innerHTML = "<img src='/assets/lock-open-solid.svg' width='15px'>"
    checkIcon.innerHTML = "<img src='/assets/eye-slash-regular.svg' width='15px'>"
}

const closed = () => {
    passwordIcon.innerHTML = "<img src='/assets/lock-solid.svg' width='14px'>"
    checkIcon.innerHTML = "<img src='/assets/eye-regular.svg' width='15px'>"
}

resetBTN.addEventListener('click', function(e) {
    e.preventDefault();
    login.value = '';
    password.value = '';
}, false)

showPassword.addEventListener('change', function() {
    if (showPassword.checked) {
        password.type = 'text'
        click()
    } else {
        password.type = 'password'
        closed()
    }
})