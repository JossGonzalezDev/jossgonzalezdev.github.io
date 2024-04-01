document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
  
    // Al hacer clic en el botón de menú
    menuToggle.addEventListener('click', function() {
      navbar.classList.toggle('active');
    });
  
    // Al hacer clic en cualquier enlace del menú (para cerrar el menú cuando se hace clic en un enlace)
    navbar.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navbar.classList.remove('active');
      });
    });
  });
  