const btnMobileNavbar = document.querySelector('.mobile-navbar')

btnMobileNavbar.addEventListener('click', () => {
  const navbar = document.querySelector('.navbar')
  navbar.classList.toggle('mobile')
})