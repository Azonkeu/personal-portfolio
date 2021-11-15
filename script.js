const hamburgerMenu = document.getElementById('hamNenu');
hamburgerMenu.addEventListener('click', () => {
  document.getElementById('navMenu').style.width = '100%';
});

const closeNavBlock = document.getElementById('closeNav');
  closeNavBlock.addEventListener('click', () => {  
  document.getElementById('navMenu').style.display = 'none';
});

function hideNavblock() {
  const navMenuBlock = document.getElementById('navMenu');
  if (navMenuBlock.style.display === 'none') {
    navMenuBlock.style.display = 'block';
  } else {
    navMenuBlock.style.display = 'none';
  }
  window.location.reload();
}

