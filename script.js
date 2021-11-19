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
closeTitle.src = 'Pictures/close.svg';
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

const popUpArray = [];
popUpArray.push(mainPopupBlock);
popUpArray.push(popupBlock);
popUpArray.push(closepopupBlock);
popUpArray.push(title);
popUpArray.push(closeTitle);
popUpArray.push(unorderedlist);
popUpArray.push(listitem);
popUpArray.push(listitem1);
popUpArray.push(listitem2);
popUpArray.push(popupimgtextBlock);
popUpArray.push(popupimgtext);

const popUpSecondArr = [];
popUpSecondArr.push(popPicture);
popUpSecondArr.push(buttonimg);
popUpSecondArr.push(buttonimgsec);

const arrayButton = [];
arrayButton.push(buttonBlock);
arrayButton.push(buttonFirst);
arrayButton.push(buttonSecond);

arrayButton[1].onclick = function redirectionMobile() {
  window.location.href = 'https://azonkeu.github.io/personal-portfolio/';
};

arrayButton[2].onclick = function redirectionMobile() {
  window.location.href = 'https://github.com/Azonkeu/personal-portfolio';
};

const textArr = [];
textArr.push(popUpText);

const popUpObject = {};
popUpObject.htmlelement = popUpArray;
popUpObject.images = popUpSecondArr;
popUpObject.button = arrayButton;
popUpObject.Text = textArr;

const popUpmenu = document.getElementById('mainpopupDiv');
const buttonTag = document.getElementById('projectpop');
const cardLink1 = document.getElementById('blockn6');
const cardLink2 = document.getElementById('blockn5');
const cardLink3 = document.getElementById('blockn4');
const cardLink4 = document.getElementById('blockn3');
const cardLink5 = document.getElementById('blockn2');
const cardLink6 = document.getElementById('blockn1');

const constArr = [];
constArr.push(popUpmenu);
constArr.push(buttonTag);
constArr.push(cardLink1);
constArr.push(cardLink2);
constArr.push(cardLink3);
constArr.push(cardLink4);
constArr.push(cardLink5);
constArr.push(cardLink6);

document.querySelector('#closetitlePop').addEventListener('click', () => {
  document.querySelector('.mainpopupBloc').style.display = 'none';
});

constArr[1].onclick = function popUpAppear() {
  popUpmenu.style.display = 'block';
};

constArr[2].onclick = function popUpAppearbl1() {
  popUpmenu.style.display = 'block';
};

constArr[3].onclick = function popUpAppearbl2() {
  popUpmenu.style.display = 'block';
};

constArr[4].onclick = function popUpAppearbl3() {
  popUpmenu.style.display = 'block';
};

constArr[5].onclick = function popUpAppearbl4() {
  popUpmenu.style.display = 'block';
};

constArr[6].onclick = function popUpAppearbl5() {
  popUpmenu.style.display = 'block';
};

constArr[7].onclick = function popUpAppearbl6() {
  popUpmenu.style.display = 'block';
};

const getInTouchMobile = document.getElementById('getInTouch');
const butGetformMo = document.getElementById('mobileForm');

getInTouchMobile.onclick = function validateEmailMobile() {
  const formatMobile = document.getElementById('email');
  const emailVal = formatMobile.value;
  const textMobile = document.getElementById('errorMobile');
  const regex = /^[a-z\-0-9\.\*\#\$\!\~\%\^\&\-\+\?\|]+@+[a-z\-0-9]+(.com)$/;
  
if (regex.test(emailVal)){
    document.querySelector('#circleMo').style.display = 'block';
    document.querySelector('#timeMo').style.display = 'none';
    document.querySelector('#errorMobile').style.display = 'none';
  } else {
    const recurMobile =  butGetformMo.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    document.querySelector('#errorMobile').style.display = 'block';
    document.querySelector('#circleMo').style.display = 'none';
    document.querySelector('#timeMo').style.display = 'block';
    return recur;
  }
  window.location.reload();
}

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
closeTitleDesk.src = 'Pictures/close.svg';
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

const popUpArrayDesk = [];
popUpArrayDesk.push(mainpopupBlockDesk);
popUpArrayDesk.push(popupBlockDesk);
popUpArrayDesk.push(popsBlockDesk);
popUpArrayDesk.push(unorderedlistDesk);
popUpArrayDesk.push(listitemDesk);
popUpArrayDesk.push(listitem1Desk);
popUpArrayDesk.push(listitem2Desk);
popUpArrayDesk.push(blockDesk);
popUpArrayDesk.push(blockTextDesk);
popUpArrayDesk.push(buttonBlockDesk);

const popUpSecondArrDesk = [];
popUpSecondArrDesk.push(closeTitleDesk);
popUpSecondArrDesk.push(popPictureDesk);
popUpSecondArrDesk.push(buttonimgDesk);
popUpSecondArrDesk.push(buttonimgsecDesk);

const arrayButtonDesk = [];
arrayButtonDesk.push(buttonFirstDesk);
arrayButtonDesk.push(buttonSecondDesk);

arrayButtonDesk[0].onclick = function redirectionLive() {
  window.location.href = 'https://azonkeu.github.io/personal-portfolio/';
};

arrayButtonDesk[1].onclick = function redirection() {
  window.location.href = 'https://github.com/Azonkeu/personal-portfolio';
};

const textArrDesk = [];
textArrDesk.push(titleDesk);
textArrDesk.push(popUpTextDesk);

popUpObject.htmlcontainers = popUpArrayDesk;
popUpObject.imagesDesk = popUpSecondArrDesk;
popUpObject.buttonDesk = arrayButtonDesk;
popUpObject.TextDesk = textArrDesk;

const popUpmenuDesk = document.getElementById('popupDivDeskmain');
const buttonTagDesk = document.getElementById('projectDesk');
const anchorTagDesk = document.getElementById('anchor');

const dataArr = [];
dataArr.push(buttonTagDesk);
dataArr.push(anchorTagDesk);
dataArr.push(popUpmenuDesk);

document.querySelector('#closetitlePops').addEventListener('click', () => {
  document.querySelector('.popupBlocDeskmain').style.display = 'none';
});

dataArr[0].onclick = function popDeskAppear() {
  popUpmenuDesk.style.display = 'block';
};

dataArr[1].onclick = function popDeskAppear1() {
  popUpmenuDesk.style.display = 'block';
};

window.addEventListener('resize', () => {
  if (window.innerWidth > 902) {
    document.querySelector('.mainpopupBloc').style.display = 'none';
    document.querySelector('.popupBlocDeskmain').style.width = '100%';
  }
});

const butGetIn = document.getElementById('getIn');
const butGetform = document.getElementById('form');

  butGetIn.onclick = function validateEmail() {
  const formatEmail = document.getElementById('emaildesk');
  const emailValue = formatEmail.value;
  const text = document.getElementById('errorText');
  const regex = /^[a-z\-0-9\.\*\#\$\!\~\%\^\&\-\+\?\|]+@+[a-z\-0-9]+(.com)$/;

  if(regex.test(emailValue)){
    document.querySelector('#circle').style.display = 'block';
    document.querySelector('#time').style.display = 'none';
    document.querySelector('#errorText').style.display = 'none';
  } else {
    const recur =  butGetform.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    document.querySelector('#errorText').style.display = 'block';
    document.querySelector('#time').style.display = 'block';
    return recur;
  }
  window.location.reload();
}


