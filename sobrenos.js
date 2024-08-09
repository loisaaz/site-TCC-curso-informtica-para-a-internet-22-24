 /* Formulário com validação */

 document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
  
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
  
    username.addEventListener('focus', function () {
        if (!username.value) {
            usernameError.textContent = 'O nome do remetente é obrigatório.';
        }
    });
  
    username.addEventListener('input', function () {
        if (!username.value) {
            usernameError.textContent = 'O nome do remetente é obrigatório.';
        } else if (username.value.length < 3) {
            usernameError.textContent = 'O nome deve conter pelo menos 3 caracteres.';
        } else {
            usernameError.textContent = '';
        }
    });
  
    email.addEventListener('input', function () {
        if (!email.validity.valid) {
            emailError.textContent = 'Por favor, insira o endereço de email que deseja encaminhar essa mensagem.';
        } else {
            emailError.textContent = '';
        }
    });
  
    form.addEventListener('submit', function (event) {
        if (!username.value || !email.value || !password.value) {
            event.preventDefault();
            alert('Por favor, preencha todos os campos.');
        }
    });
  });
  
    /* Formulário com validação */