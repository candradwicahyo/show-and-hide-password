window.addEventListener('DOMContentLoaded', () => {
  
  const eyeIcons = document.querySelectorAll('#icon');
  eyeIcons.forEach(eyeIcon => {
    eyeIcon.addEventListener('click', function() {
      const input = this.parentElement.querySelector('.input-password');
      input.setAttribute('type', (this.className.includes('fa-eye-slash')) ? 'text' : 'password');
      this.className = (this.className.includes('fa-eye-slash')) ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash';
    });
  });
  
});