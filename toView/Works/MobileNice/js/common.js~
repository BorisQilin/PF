//from price sort
let priceSort = document.getElementsByClassName('priceSort__title')[0];
priceSort.onclick = function () {
  let arrows = document.getElementsByClassName('priceSort__arrows')[0];
  let arrows__up = arrows.children[0];
  let arrows__down = arrows.children[1];

  if (arrows__up.classList.contains('active')) {
    arrows__up.classList.remove('active');
    arrows__down.classList.add("activeD");
  } else if (arrows__down.classList.contains('activeD')) {
    arrows__down.classList.remove('activeD');
    arrows__up.classList.add("active");
  }
}

let info__order = document.getElementsByClassName('info__order')[0];
// info__order.querySelector('input');
// info__order.querySelector('p');
let order__control = document.getElementsByClassName('order__control');
let order__plus = document.getElementsByClassName('order__plus');
let order__minus = document.getElementsByClassName('order__minus');

function control (order__control) {
  for (var i = 0; i < order__control.length; i++) {

    let order__plus = order__control[i].querySelector('.order__plus');
    let order__minus = order__control[i].querySelector('.order__minus');


    order__plus.onclick = function () {
      let input = order__plus.parentNode.parentNode.querySelector('input');
      let inputValue = input.value;
      inputValue = +inputValue + 1;
      input.value = inputValue;
    };


    order__minus.onclick = function () {
      let input = order__minus.parentNode.parentNode.querySelector('input');
      let inputValue = input.value;

      if (+inputValue > 0) {
        inputValue = +inputValue - 1;
        input.value = inputValue;
      } else {
        return false;
      }
    };
  }
}
control(order__control);
