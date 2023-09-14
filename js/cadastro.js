const cpf = document.getElementById('cpf');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');
const icon = document.getElementById('icone');
    

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


// fodase

function clique() {

    window.alert('TATU SUPREMACY');

}

