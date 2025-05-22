const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


document.getElementById('copy-email').addEventListener('click', function (e) {
    e.preventDefault();
    const email = 'jiyashah051@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard!');
    }, () => {
      alert('Failed to copy email.');
    });
  });
  