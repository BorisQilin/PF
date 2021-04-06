var toolTip = document.getElementById('toolTip');
var submitBtn = document.getElementById('submitBtn');

document.getElementById('rsecond').addEventListener('change', function (){
  if (document.getElementById('rsecond').checked) {
    toolTip.classList.add('showToolTip');
    submitBtn.value = 'Subscribe';
  }
});
document.getElementById('rfirst').addEventListener('change', function (){
  if (document.getElementById('rfirst').checked) {
    toolTip.classList.remove('showToolTip');
    submitBtn.value = 'Add to cart';
  }
});

var Link = document
          .getElementsByClassName('tabLink__list')[0]
          .querySelectorAll('.link');

for (let i = 0; i < Link.length; i++) {
  Link[i].addEventListener('click', function (e){
    e.preventDefault();
    var containTabContent = document.getElementsByClassName('tabContent__list')[0];
    let allTabBlock = containTabContent.querySelectorAll('.list__item');
    let nameThisElem = this.name;
    let tabElem = containTabContent.querySelector('.'+nameThisElem);

    for (let i = 0; i < Link.length; i++) {
      Link[i].classList.remove('link--active');
    }

    for (let i = 0; i < allTabBlock.length; i++) {
      allTabBlock[i].classList.remove('item--active');
    }
    
    this.classList.add('link--active');
    tabElem.classList.add('item--active');
  });
}

var selectLink = document.getElementsByClassName('checkLang')[0].querySelector('.item__link');
var selectList = document.getElementsByClassName('langSelect__list')[0];

selectLink.addEventListener('click', function (e){
  e.preventDefault();
  selectList.classList.toggle('langSelect__list--active');
});

var selectedLink = selectList.querySelectorAll('.item__link');
var checkLang = document.getElementsByClassName('checkLang')[0].querySelector('.item__link');
for (let i = 0; i < selectedLink.length; i++) {
  selectedLink[i].addEventListener('click', function (e){
    e.preventDefault();

    let lang = this.textContent;

    checkLang.textContent = lang;
    checkLang.classList[0]
    checkLang.classList.remove(checkLang.classList[checkLang.classList.length - 1]);
    checkLang.classList.add(this.classList[this.classList.length - 1]);

    selectList.classList.toggle('langSelect__list--active');
    
    console.log(checkLang.classList);
  });
}

var closePopupCookies = document.getElementsByClassName('cookies__done')[0]
closePopupCookies.addEventListener('click', function (e){
  e.preventDefault();
  document.getElementsByClassName('cookies')[0].classList.add('cookies--ok');
  document.getElementsByTagName('body')[0].style.overflow = 'auto';
});