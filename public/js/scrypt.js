function togglePassword() {
  const passwordInput = document.getElementById('contraseña');
  const toggleButton = document.getElementById('toggleButton');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleButton.textContent = 'Ocultar';
  } else {
    passwordInput.type = 'password';
    toggleButton.textContent = 'Mostrar';
  }
}