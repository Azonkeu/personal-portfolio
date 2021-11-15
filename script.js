const element = document.getElementById('hamNenu');
element.addEventListener('click', () => {
  document.getElementById('navMenu').style.width = '100%';
});

function closeNavMenu() {
  document.getElementById('navMenu').style.width = '0';
  document.getElementById('navxid').style.marginLeft = '0';
}
closeNavMenu();

function hidenavblock() {
  const x = document.getElementById('navMenu');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
  window.location.reload();
}
hidenavblock();
