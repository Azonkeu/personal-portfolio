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
