class TCell {
	constructor(cell,path){
		this.observables = [];
		this.td = cell;
		this.path = path;
	}

	static beatFig(){
		event.stopPropagation();
		// a - объект-ячейка на которой стоит вражеская фигура
		// b - картинка представляющая вражескую фигуру
		// console.log(this);
		let b = this.childNodes[0].childNodes[0];
		// с - фигура совершающая взятие
		let c,w;
		[...cell].forEach(el => {
			if(el.td == this) {
				c = el.observables[0];
				w = el.observables[1];
			}
		});
		// помним что объект сет со всеми фигурами общедоступный - obj
		// d - фигура уходящая с доски
		let d = null, p = '';
		[...obj].forEach(el=>{
			if (el.img == b) {
				d = el;
				p = el.position;
			}
		});

		c.position = p;
		this.childNodes[0].removeChild(b);
		this.childNodes[0].appendChild(c.img);
		obj.delete(d);

		// описать смену ранга
		c.transform ? c.transform() : false;

		w.reset();

		if (c.firstStep) {
			c.firstStep = false;
		}
		w.check();
		w.phase();
	}

	create(obs1,obs2){
		let td = this.td, that = this;
		this.observables.push(obs1);
		this.observables.push(obs2);

		if (td) {
			if (td.childNodes[0].childNodes[0]) {
				td.classList.remove('illum');
				td.classList.add('beat');
	
				td.addEventListener('click', TCell.beatFig,true);
			} else {
				td.classList.add('illum');
	
				td.onmouseover = function (e) {
					this.style.background = '#fff';
					this.style.cursor = 'crosshair';
				};
		
				td.onmouseout = function (e) {
					this.style.background = '';
					this.style.cursor = '';
				};
		
				td.onclick = function (e) {
					// если ситуация с шахом разобрана, то продолжить выполнение
					let a = document.querySelectorAll('.choice')[0];
					let i = a.childNodes[0];
					a.classList.remove('choice');
					a.removeChild(i);		
					this.childNodes[0].appendChild(i);

					// описать смену ранга
					that.observables[0].transform ? that.observables[0].transform() : false;

					that.observables[1].reset();
					that.observables[0].position = that.path;

					// для короля и ладьи - особые условия на рокировку
					if (that.observables[0].firstStep) {
						that.observables[0].firstStep = false;
						// посмотреть массив наблюдателей, если в нём кто-то есть, там указаны позиции при которых происходит сдвиг фигур которые наблюдают за королём, если король перешёл на соответствующую позицию, она указана у наблюдателя, тогда мы передвигаем наблюдателя на позицию которую указали в параметрах наблюдателя
						function castling(obj) {
							// ячейка в которую надо переместить элемент
							let a = document.querySelector('.'+obj.pos).childNodes[0];
							// где находится элемент
							let b = document.querySelector('.'+obj.el.position).childNodes[0];
							b.removeChild(obj.el.img);
							obj.el.position = obj.pos;
							a.appendChild(obj.el.img);
						}

						let ok = that.observables[0].observablesKind;

						// если король не под шахом и у него есть наблюдатели готовые к ракировке, то при условиях оговорённых наблюдателями - совершить ракировку
						if (ok && ok.cast.length && !ok.chah.length) that.observables[0].observablesKind.cast.forEach(el => that.observables[0].position == el.pg ? castling(el) : false);
						
						if (that.observables[0].observablesKind) that.observables[0].observablesKind.cast = [];
					}

					// перед сменой хода, если фигура поставила противнику шах объявляем это
					that.observables[1].check();
					// очерёдность хода
					that.observables[1].phase();
				}
			}
		}
		return this;
	}
}