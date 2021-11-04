(function (event) {
  /*
    *********
    * TABS
    *********
  */
  let topTabLink = document.querySelectorAll('.presentation__btn'),
      tabLinks = document.querySelectorAll('.tab__title .tab__link'),
      tabItems = document.querySelectorAll('.section__item'),
      selectTab = (that) => {
        tabLinks.forEach(elm => elm.classList.remove('tab__link_active'));
        tabItems.forEach(elm => elm.classList.remove('section__item_active'));

        let activate = index => {
          tabLinks[index].classList.add('tab__link_active');
          tabItems[index].classList.add('section__item_active');
        }

        if (that.classList.contains('tab__link_pp')) {
          activate(0);
        } else if (that.classList.contains('tab__link_ep')) {
          activate(1);
        }
      };

  topTabLink.forEach(el => el.addEventListener('click', function() {selectTab(this)}));

  tabLinks.forEach(el => el.addEventListener('click', function(event){
    event.preventDefault();
    return selectTab(this);
  }));
  /*
    ***********
    * TABS END
    ***********
  */

  /*
    ***********
    * POPUP
    ***********
  */
  let card = document.querySelector('.tab__content'),
      popup = document.querySelector('.popup-wrap'),
      popoupClose = popup.querySelector('.popup__close'),
      page = document.body;

  card.addEventListener('click', function (event) {
    let elm = event.target;
    if (elm.classList.contains('card__action')) {
      event.preventDefault();
      popup.classList.add('popup-wrap_active');
      page.style.overflow = 'hidden';

      let card = elm.parentNode,
          cardImg = card.querySelector('.card__pic > img').getAttribute('src'),
          poppuImg = popup.querySelector('.popup-image > img'),
          oldPrise = card.querySelector('.card__prise_old > del').innerText,
          actualPrise = card.querySelector('.card__prise_actual').innerText,
          cardTitle = card.querySelector('.card__title').innerText,
          cardSize = card.querySelector('.input-size:checked') ? card.querySelector('.input-size:checked').value : null,
          cardDisabledSize = card.querySelectorAll('.input-size:disabled') ? card.querySelectorAll('.input-size:disabled') : null,
          select = popup.querySelector('.popup-form__size').options;

      // замена изображения на изображение товара
      poppuImg.setAttribute('src', cardImg);
      poppuImg.setAttribute('src', cardImg);
      // замена цен
      popup.querySelector('.popup-form__prise_old > del').innerHTML = oldPrise;
      popup.querySelector('.popup-form__prise_actual').innerHTML = actualPrise;
      // замена заголовка
      popup.querySelector('.popup-form__title').innerHTML = cardTitle;
      // связывание радио с селектом
      if (cardSize) {
        for (let option in select) {
          let element = select[option];
          if (element.value == cardSize)
            element.selected = true;
        }
      } else {
        select[0].selected = true;
      }

      if (cardDisabledSize.length) {
        cardDisabledSize.forEach(el => {
          for (let option in select) {
            let element = select[option];
            if (element.value == el.value) element.disabled = true;
          }
        });
      } else {
        for (const option in select) {
          select[option].disabled = false;
        }
      }

    }
  });

  popoupClose.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('popup-wrap_active');
    page.style.overflow = '';
  });

  popup.addEventListener('click', function (event) {
    event.stopPropagation();
    
    if (!document.querySelector('.popup').contains(event.target)) popoupClose.click();
  });
  /*
    ***********
    * POPUP END
    ***********
  */

})(event)