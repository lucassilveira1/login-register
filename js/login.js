const login = document.getElementById('login');
const password = document.getElementById('password');
const resetBTN = document.getElementById('reset');

resetBTN.addEventListener('click', function(e) {
    e.preventDefault();
    login.value = '';
    password.value = '';
}, false)