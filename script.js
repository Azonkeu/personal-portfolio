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

const mainPopupBlock = document.createElement('div');
mainPopupBlock.id = 'mainpopupDiv';
mainPopupBlock.className = 'mainpopupBloc';

const popupBlock = document.createElement('div');
popupBlock.id = 'popupDiv';
popupBlock.className = 'popupBloc';

const closepopupBlock = document.createElement('div');
closepopupBlock.id = 'closepopupDiv';
closepopupBlock.className = 'closepopupBloc';
popupBlock.appendChild(closepopupBlock);

const title = document.createElement('h3');
title.id = 'titlePop';
title.className = 'titlepop';
title.textContent = 'Multi Post Stories';
closepopupBlock.appendChild(title);

const closeTitle = document.createElement('img');
closeTitle.id = 'closetitlePop';
closeTitle.className = 'closetitlepop';
closeTitle.src= 'Pictures/close.svg';
closepopupBlock.appendChild(closeTitle);

const unorderedlist = document.createElement('ul');
unorderedlist.id = 'listlang';
unorderedlist.className = 'langlist';
popupBlock.appendChild(unorderedlist);

const listitem = document.createElement('li');
listitem.className = 'listitem1 listht';
listitem.textContent = 'html';
unorderedlist.appendChild(listitem);

const listitem1 = document.createElement('li');
listitem1.className = 'listitem1 listbo';
listitem1.textContent = 'Bootstrap';
unorderedlist.appendChild(listitem1);

const listitem2 = document.createElement('li');
listitem2.className = 'listitem1 listru';
listitem2.textContent = 'Ruby on rails';
unorderedlist.appendChild(listitem2);

const popupimgtextBlock = document.createElement('div');
popupimgtextBlock.id = 'popuptextDiv';
popupimgtextBlock.className = 'popuptextBloc';
popupBlock.appendChild(popupimgtextBlock);

const popPicture = document.createElement('img');
popPicture.className = 'imagePopup';
popPicture.src = 'Pictures/popup-pic.png';
popupimgtextBlock.appendChild(popPicture);

const popupimgtext = document.createElement('div');
popupimgtext.id = 'popuptextdi';
popupimgtext.className = 'popuptextBl';
popupimgtextBlock.appendChild(popupimgtext);

const popUpText = document.createElement('p');
popUpText.className = 'textPopup';
popUpText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";
popupimgtext.appendChild(popUpText);

const buttonBlock = document.createElement('div');
buttonBlock.id = 'buttonDiv';
buttonBlock.className = 'buttonBlocicon';
popupimgtext.appendChild(buttonBlock);

const buttonFirst = document.createElement('button');
buttonFirst.id = 'buttonPop';
buttonFirst.className = 'buttonpop';
buttonFirst.textContent = 'See Live';
buttonBlock.appendChild(buttonFirst);

const buttonimg = document.createElement('img');
buttonimg.id = 'buttonPopimg';
buttonimg.className = 'buttonpopimg';
buttonimg.src = 'Pictures/arrow.svg';
buttonFirst.appendChild(buttonimg);

const buttonSecond = document.createElement('button');
buttonSecond.id = 'buttonPopsecond';
buttonSecond.className = 'buttonpopsecond';
buttonSecond.src = 'Pictures/popup-pic.png';
buttonSecond.textContent = 'See Source';
buttonBlock.appendChild(buttonSecond);

const buttonimgsec = document.createElement('img');
buttonimgsec.src = 'Pictures/githubpopup.svg';
buttonimgsec.id = 'buttonPopsecondimg';
buttonimgsec.className = 'buttonpopsecondimg';
buttonSecond.appendChild(buttonimgsec);

document.body.appendChild(mainPopupBlock);
mainPopupBlock.appendChild(popupBlock);

const popUpmenu = document.getElementById("mainpopupDiv");
const buttonTag = document.getElementById("projectpop");
const cardLink1 = document.getElementById("blockn6");
const cardLink2 = document.getElementById("blockn5");
const cardLink3 = document.getElementById("blockn4");
const cardLink4 = document.getElementById("blockn3");
const cardLink5 = document.getElementById("blockn2");
const cardLink6 = document.getElementById("blockn1");
const span = document.getElementsByClassName("closetitlePop")[0];

document.querySelector('#closetitlePop').addEventListener('click', () => {
  document.querySelector('.mainpopupBloc').style.display = 'none';
});

buttonTag.onclick = function() {
  popUpmenu.style.display = "block";
}

cardLink1.onclick = function() {
  popUpmenu.style.display = "block";
}

cardLink2.onclick = function() {
  popUpmenu.style.display = "block";
}

cardLink3.onclick = function() {
  popUpmenu.style.display = "block";
}

cardLink4.onclick = function() {
  popUpmenu.style.display = "block";
}

cardLink5.onclick = function() {
  popUpmenu.style.display = "block";
}

cardLink6.onclick = function() {
  popUpmenu.style.display = "block";
}

// desktop

const mainpopupBlockDesk = document.createElement('div');
mainpopupBlockDesk.id = 'popupDivDeskmain';
mainpopupBlockDesk.className = 'popupBlocDeskmain';

const popupBlockDesk = document.createElement('div');
popupBlockDesk.id = 'popupDivDesk';
popupBlockDesk.className = 'popupBlocDesk';
mainpopupBlockDesk.appendChild(popupBlockDesk);

const popsBlockDesk = document.createElement('div');
popsBlockDesk.id = 'popsDivDesk';
popsBlockDesk.className = 'popsBlocDesk';
popupBlockDesk.appendChild(popsBlockDesk);

const titleDesk = document.createElement('h3');
titleDesk.id = 'titlePopDesk';
titleDesk.className = 'titlepopDesk';
titleDesk.textContent = 'Keeping track of hundreds  of components website';
popsBlockDesk.appendChild(titleDesk);

const closeTitleDesk = document.createElement('img');
closeTitleDesk.id = 'closetitlePops';
closeTitleDesk.className = 'closetitlepop';
closeTitleDesk.src= 'Pictures/close.svg';
popsBlockDesk.appendChild(closeTitleDesk);

const unorderedlistDesk = document.createElement('ul');
unorderedlistDesk.id = 'listlangDesk';
unorderedlistDesk.className = 'langlistDesk';
popupBlockDesk.appendChild(unorderedlistDesk);

const listitemDesk = document.createElement('li');
listitemDesk.textContent = 'html';
listitemDesk.className = 'lang-list-Desk-item listhtDesk';

const listitem1Desk = document.createElement('li');
listitem1Desk.textContent = 'Bootstrap';
listitem1Desk.className = 'lang-list-Desk-item listboDesk';

const listitem2Desk = document.createElement('li');
listitem2Desk.textContent = 'Ruby on rails';
listitem2Desk.className = 'lang-list-Desk-item listruDesk';

const blockDesk = document.createElement('div');
blockDesk.id = 'deskmainid';
blockDesk.className = 'deskmain';
popupBlockDesk.appendChild(blockDesk);

const popPictureDesk = document.createElement('img');
popPictureDesk.src = 'Pictures/Snapshoot-desktop.png';
popPictureDesk.className = 'deskmainimage';


const blockTextDesk = document.createElement('div');
blockTextDesk.className = 'deskmaindiv';


const popUpTextDesk = document.createElement('p');
blockTextDesk.className = 'deskmaintext';
popUpTextDesk.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.";


const buttonBlockDesk = document.createElement('div');
buttonBlockDesk.id = 'buttonDivDesk';
buttonBlockDesk.className = 'buttonBlocDesk';

const buttonFirstDesk = document.createElement('button');
buttonFirstDesk.id = 'buttonPopDesk';
buttonFirstDesk.className = 'buttonpopDesk';
buttonFirstDesk.src = 'Pictures/popup-pic.png';
buttonFirstDesk.textContent = 'See Live';

const buttonimgDesk = document.createElement('img');
buttonimgDesk.src = 'Pictures/arrow.svg';
buttonimgDesk.className = 'imageDeskbutton1';

const buttonSecondDesk = document.createElement('button');
buttonSecondDesk.id = 'buttonPopsecondDesk';
buttonSecondDesk.className = 'buttonpopsecondDesk';
buttonSecondDesk.src = 'Pictures/popup-pic.png';
buttonSecondDesk.textContent = 'See Source';

const buttonimgsecDesk = document.createElement('img');
buttonimgsecDesk.src = 'Pictures/githubpopup.svg';
buttonimgsecDesk.className = 'imageDeskbutton';

document.body.appendChild(mainpopupBlockDesk);
unorderedlistDesk.appendChild(listitemDesk);
unorderedlistDesk.appendChild(listitem1Desk);
unorderedlistDesk.appendChild(listitem2Desk);
blockDesk.appendChild(popPictureDesk);
blockDesk.appendChild(blockTextDesk);
blockTextDesk.appendChild(popUpTextDesk);
blockTextDesk.appendChild(buttonBlockDesk);
buttonBlockDesk.appendChild(buttonFirstDesk);
buttonFirstDesk.appendChild(buttonimgDesk);
buttonBlockDesk.appendChild(buttonSecondDesk);
buttonSecondDesk.appendChild(buttonimgsecDesk);

const popUpmenuDesk = document.getElementById("popupDivDeskmain");
const buttonTagDesk = document.getElementById("projectDesk");
const anchorTagDesk = document.getElementById("anchor");
const spanDesk = document.getElementsByClassName("closetitlePops")[0];

document.querySelector('#closetitlePops').addEventListener('click', () => {
  document.querySelector('.popupBlocDeskmain').style.display = 'none';
});

buttonTagDesk.onclick = function() {
  popUpmenuDesk.style.display = "block";
}

anchorTagDesk.onclick = function() {
  popUpmenuDesk.style.display = "block";
}

const resizeScreen = window.addEventListener('resize', function() {
  if(window.innerWidth>902) {
    document.querySelector('.mainpopupBloc').style.display = 'none';
    document.querySelector('.popupBlocDeskmain').style.width = '100%';
  }
});