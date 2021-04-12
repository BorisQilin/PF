// слайдер
$('.majorSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
	arrows: false,
  autoplay: true,
  speed: 3000,
	lazyLoad: 'ondemand',
	autoplaySpeed: 4000,
	focusOnSelect: false,
  fade: true
});

// селект на смену языка
let selectLink = document.querySelector('.checkLang').querySelector('a'),
		selectList = document.querySelector('.langSelect__list'),
		selectedLink = selectList.querySelectorAll('.list__item > a');

	selectLink.addEventListener('click', function (e){
		e.preventDefault();
		e.stopPropagation ? e.stopPropagation() : (e.cancelBubble=true);
		selectList.classList.toggle('langSelect__list--active');
	});

	document.addEventListener('click', e => {
		if (e.target !== selectList) {
			selectList.classList.remove('langSelect__list--active');
		}
	});

function changeLanguage (e){
	e.preventDefault();
	let lang = this.textContent;

	/*
		* SERVER
	*/

	selectLink.textContent = lang;
	selectLink.classList[0]
	selectLink.classList.remove(selectLink.classList[selectLink.classList.length - 1]);
	selectLink.classList.add(this.classList[this.classList.length - 1]);

	selectList.classList.toggle('langSelect__list--active');
}

for (let i = 0; i < selectedLink.length; i++) {
  selectedLink[i].addEventListener('click', changeLanguage);
}

// calculator
let crop = document.getElementById('crop'),
		yieldInp = document.getElementById('yield'),
		price = document.getElementById('price'),
		area = document.getElementById('area'),
		resField = document.getElementsByClassName('profit__value')[0],
		inputs = [yieldInp, price, area],
		cropVal = 310;
		yieldInpVal = priceVal = areaVal = 0;

crop.addEventListener('change', function () {
	switch (this.value) {
		case "Пшеница":
			cropVal = 310;
			break;
		case "Ячмень":
			cropVal = 450;
			break;
		case "Рожь":
			cropVal = 290;
			break;
		default:
			throw('то-то не так из селектом');
	}

	profitRes(cropVal, yieldInpVal, priceVal,areaVal);
})

inputs.forEach((el) => {
	el.oninput = function (e) {
		switch (el.name) {
			case 'yield':
				yieldInpVal = parseInt(this.value);
				break;
			case 'price':
				priceVal = parseInt(this.value);
				break;
			case 'area':
				areaVal = parseInt(this.value);
				break;
			default:
				throw('что-то не так с инпутами');
		}
		this.value = this.value.replace(/[\D]/, "");
		profitRes(cropVal, yieldInpVal, priceVal,areaVal);
	};
});

function profitRes(cr,yi,pr,ar) {
	if (!yi || !pr || !ar) {
		return false;
	}
	resField.innerText = (cr * ar * yi) - (ar * pr);
}
