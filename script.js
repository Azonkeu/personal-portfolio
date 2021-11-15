function openNavlinks() {
  document.getElementById('navMenu').style.width = '100%';
  document.getElementById('navxid').style.marginLeft = '250px';
}

openNavlinks();

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
}

hidenavblock();
