const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const toggleLink = document.getElementById('toggle-link');
    const toggleText = document.getElementById('toggle-text');
    const formTitle = document.getElementById('form-title');

    toggleLink.addEventListener('click', (e) => {
      e.preventDefault();
      loginForm.classList.toggle('active');
      registerForm.classList.toggle('active');

      if (loginForm.classList.contains('active')) {
        formTitle.textContent = "Login to DEBSOC";
        toggleText.textContent = "Don't have an account?";
        toggleLink.textContent = "Register here";
      } else {
        formTitle.textContent = "Register for DEBSOC";
        toggleText.textContent = "Already have an account?";
        toggleLink.textContent = "Login here";
      }
    });