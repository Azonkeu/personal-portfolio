const hamburgerMenu = document.getElementById('hamNenu');
hamburgerMenu.addEventListener('click', () => {
  document.getElementById('navMenu').style.width = '100%';
});

const closeNavBlock = document.getElementById('closeNav');
closeNavBlock.addEventListener('click', () => {
  document.getElementById('navMenu').style.display = 'none';
});

const openNavlink = document.getElementById('portfolio');
openNavlink.addEventListener('click', () => { 
  document.getElementById('navMenu').style.display = 'none';
  window.location.reload();
});

const openlinkAbout = document.getElementById('about');
openlinkAbout.addEventListener('click', () => { 
  document.getElementById('navMenu').style.display = 'none';
  window.location.reload();
});

const openlinkContact = document.getElementById('contact');
openlinkContact.addEventListener('click', () => { 
  document.getElementById('navMenu').style.display = 'none';
  window.location.reload();
});