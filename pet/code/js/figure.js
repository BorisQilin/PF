class Figure {
	static observables = [];

	// отрисовка фигур на доске
	static createFactory(type) {
		return function () {
			let path = 'img/',
					that = this,
					p = this.camp ? 'w/' : 'b/';
	
			this.img = new Image(100,100);
			path = path + p + `${type}.png`;
			this.img.src = path;
	
			document.querySelector('.' + this.position + ' div').insertAdjacentElement('afterbegin',this.img);
	
			this.img.addEventListener('click', function () {
				Figure.observables[0].reset();
				if (this.parentNode) {
					this.parentNode.classList.add('choice');
					that.move(Figure.observables[0]);
				}
			},true);
		}
	}

	constructor (type, position, camp, flag,pop) {
		this.type = type;
		this.position = position;
		this.camp = camp;
		this.flag = flag;
		this.img = null;
		this.pop = pop;
	}

	// добавить наблюдателя
	addObserver(observer){
		Figure.observables.push(observer);
		// console.log(Figure.observables);
	}

	// поиск пути - у каждой фигуры свой алгоритм поиска
	roadCearch(){}

	// если на поле стоит своя фигура, не подсвечивать ход
	checkPos(ep) {
		for (let i = 0, len = [...this.pop].length; i < len; i++) {
			let el = [...this.pop][i];
			if (ep == el.position && this.camp == el.camp) {
				// console.log('in');
				return false;
			}
		}
		return true;
	}

	// простой ход, без происшествия
	move(world){
		if (!this.flag) return false;

    let arr = [];
    let p = (this.position).match(/\d/)[0]*1,//4
        pl = (this.position).match(/\w/)[0];//d

		arr = this.roadSearch(p,pl,arr);

		// arr - путь по которому может пройти фигура, без определения вражеских фигур, без позиций взятия

    world.illuminate(arr, this);
	}
};

class Pawn extends Figure {
	constructor (type, position, camp, flag,pop) {
		super(type, position, camp, flag,pop);
		this.create = Figure.createFactory('pawn');
	}

	transform() {
		let that = this,
				maxp = this.camp ? 1 : 8,
				totalp = (this.position).match(/\d/)[0]*1;
		let metamorphosis = () => {
			// модальное окно повышения
			let mod = createElements(['div']);
			mod.setAttribute('class','modal');
			let modEl = createElements(['div']);
			modEl.setAttribute('class','modal_list');
			let modRow = createElements(['div']);
			modRow.setAttribute('class','modal_cont');
			modEl.appendChild(modRow);

			for (let i = 0; i < 4; i++) {
				let item = createElements(['div']);
				item.setAttribute('class','list_item');
				modRow.appendChild(item);
			}

			mod.appendChild(modEl);
			document.body.appendChild(mod);

			let it = document.querySelectorAll('.modal_cont > .list_item');
			let upf = ['knight','rook','bishop','queen'];

			it.forEach((el,i) => {
				el.classList.add(upf[i]);
				
				let path = 'img/', p = this.camp ? 'w/' : 'b/', img = new Image(100,100);

				path = path + p + `${upf[i]}.png`;
				img.src = path;
		
				el.appendChild(img);
		
				img.addEventListener('click', function () {
					let a = null;
					switch (this.parentNode.classList[this.parentNode.classList.length - 1]) {
						case 'knight':
							a = new Knight('knight', that.position, that.camp, true, obj);
							break;
						case 'rook':
							a = new Rook('rook', that.position, that.camp, true, obj);
							break;
						case 'bishop':
							a = new Bishop('bishop', that.position, that.camp, true, obj);							
							break;
						case 'queen':
							a = new Queen('queen', that.position, that.camp, true, obj);
							break;
					}
					document.querySelector('.' + that.position).childNodes[0].removeChild(that.img);
					obj.delete(that);
					a.create();
					obj.add(a);

					it.forEach(elm => {
						elm.removeChild((elm.querySelector('img')));
						elm.classList.remove(elm.classList[elm.classList.length - 1]);
					});

					document.body.removeChild(mod);
				});
			});
		};

		maxp == totalp ? metamorphosis() : false ;


	}

	roadSearch(numberPos,letterPos,arr){
		let vector = 0, count = 1;
    vector = this.camp ? -1 : 1;

    if (7 == numberPos && this.camp || 2 == numberPos && !this.camp) {
      count = 2;
    }

		let diagForse = () => {
			// проверяем клетки по диагонали
			let d1 = letters[letters.indexOf(letterPos)+vector];
			let d2 = letters[letters.indexOf(letterPos)-vector];
			let r1 = [...this.pop].some(el => el.position == (d1+numberPos));
			let r2 = [...this.pop].some(el => el.position == (d2+numberPos));
			// если фигура крайняя - не страшно checkPos отсеет позицию
			this.checkPos(d1+numberPos) && r1 ? arr.push(d1+numberPos) : false;
			this.checkPos(d2+numberPos) && r2 ? arr.push(d2+numberPos) : false;
		}

		// тдельно ф-я на поиск свободной клетки и отдельно на поиск по диагонали
		let sw = () => {
											let a = letterPos+numberPos;
											if (this.checkPos(a)) !([...this.pop].some(el=>el.position==(a)))
																						? arr.push(a)
																						: false;
										};

		if (count == 2) {
			numberPos += vector;
			sw();
			diagForse();
			// но если путь преграждён, то не перепригивать фигуру но проверять по диагонали
			if (!([...this.pop].some(el=>el.position==(letterPos+numberPos)))) {
				numberPos += vector;
				sw();
			}
		} else {
      numberPos += vector;
			sw();
			diagForse();
		}

		return arr;
	}
}

class Knight extends Figure {
	constructor (type, position, camp, flag,pop) {
		super(type, position, camp, flag,pop);
		this.create = Figure.createFactory('knight');
	}

	roadSearch(numberPos,letterPos,arr){
		let posDetect = (n,l,arr) => {
			if (numbers.indexOf((numbers[numbers.indexOf(numberPos)+n]) != -1)) {
				let num = numbers[numbers.indexOf(numberPos)+n];
				if (letters.indexOf((letters[letters.indexOf(letterPos)+l]) != -1)) {
					let lett = letters[letters.indexOf(letterPos)+l];
					if (lett && num) {
						if (this.checkPos(lett+num)) {
							arr.push(lett+num);
						} else {
							// если на клетке стоит не своя, а вражеская фигура, она доступна для взятия
							return false;
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
		}

		let moveVariant = [[2,1],[-2,-1],[1,2],[-1,-2],[2,-1],[-1,2],[-2,1],[1,-2]];

		moveVariant.forEach(el => posDetect(el[0],el[1],arr));

		return arr;
	}
}

class Rook extends Figure {
	constructor (type, position, camp, flag,pop) {
		super(type, position, camp, flag,pop);
		this.create = Figure.createFactory('rook');
		this.firstStep = true;
	}

	roadSearch(numberPos,letterPos,arr,und){
		let mp = [], out = [];
		mp[0] = numbers.slice(numbers.indexOf(numberPos)+1);// d
		mp[1] = (numbers.sort((a,b)=>a-b)).slice(numbers.indexOf(numberPos)+1);// u
		numbers.sort((a,b)=>a+b);

		mp[2] = letters.slice(letters.indexOf(letterPos)+1);// r
		mp[3] = (letters.sort((a,b)=>a-b)).slice(letters.indexOf(letterPos)+1);// l

		
		let unite = (a,b,typeArr,arr) => {
			let c = [];
			if (a.length) {
				a.forEach(el => typeArr == 'n' ? c.push(b+el) : c.push(el+b));
			}
			arr.push(c);
		};

		unite(mp[0],letterPos,'n',out);
		unite(mp[1],letterPos,'n',out);
		unite(mp[2],numberPos,'l',out);
		unite(mp[3],numberPos,'l',out);

		// ельзя перескакивать фигуры, если только это не король с проверкой на шах
		out.forEach(el => {
			if (el.length) {
				mark:for (let i = 0; i < el.length; i++) {
					if(!this.checkPos(el[i])) break;
					
					if (!und) {
						for (let j = 0; j < [...this.pop].length; j++) {
							if([...this.pop][j].position == el[i]){
								arr.push(el[i]);
								break mark;
							}
							
						}
					}
					arr.push(el[i]);
				}
			}
		});

		return arr;
	}
}

class Bishop extends Figure {
	constructor (type, position, camp, flag,pop) {
		super(type, position, camp, flag,pop);
		this.create = Figure.createFactory('bishop');
	}

	roadSearch(numberPos,letterPos,arr,und){
		let mp = [], out = [];
		mp[0] = numbers.slice(numbers.indexOf(numberPos)+1);// d
		mp[1] = (numbers.sort((a,b)=>a-b)).slice(numbers.indexOf(numberPos)+1);// u
		numbers.sort((a,b)=>a+b);

		mp[2] = letters.slice(letters.indexOf(letterPos)+1);// r
		mp[3] = (letters.sort((a,b)=>a-b)).slice(letters.indexOf(letterPos)+1);// l
		
		let unite = (a,b,arr) => {
			let c = [];
			if (a.length <= b.length && a.length) {
				a.forEach((el,i) => c.push(b[i]+el));
			}
			
			if (a.length > b.length && b.length) {
				b.forEach((el,i) => c.push(el+a[i]));
			}

			arr.push(c);
		};

		
		unite(mp[0],mp[2],out);
		unite(mp[0],mp[3],out);
		unite(mp[1],mp[2],out);
		unite(mp[1],mp[3],out);
	
		// ельзя перескакивать фигуры, если только это не король с проверкой на шах
		out.forEach(el => {
			if (el.length) {
				mark:for (let i = 0; i < el.length; i++) {
					if(!this.checkPos(el[i])) break;
					
					if (!und) {
						for (let j = 0; j < [...this.pop].length; j++) {
							if([...this.pop][j].position == el[i]){
								arr.push(el[i]);
								break mark;
							}
							
						}
					}
					arr.push(el[i]);
				}
			}
		});

		return arr;
	}
}

class Queen extends Figure {
	constructor (type, position, camp, flag,pop) {
		super(type, position, camp, flag,pop);
		this.create = Figure.createFactory('queen');
	}

	roadSearch(numberPos,letterPos,arr,und){
		let mp = [], out = [];
		mp[0] = numbers.slice(numbers.indexOf(numberPos)+1);// d
		mp[1] = (numbers.sort((a,b)=>a-b)).slice(numbers.indexOf(numberPos)+1);// u
		numbers.sort((a,b)=>a+b);

		mp[2] = letters.slice(letters.indexOf(letterPos)+1);// r
		mp[3] = (letters.sort((a,b)=>a-b)).slice(letters.indexOf(letterPos)+1);// l

		let uniteL = (a,b,typeArr,arr) => {
																				let c = [];
																				if (a.length) {
																					a.forEach(el => typeArr == 'n' ? c.push(b+el) : c.push(el+b));
																				}
																				arr.push(c);
																			},
				uniteD = (a,b,arr) => {
																let c = [];
																if (a.length <= b.length && a.length)	a.forEach((el,i) => c.push(b[i]+el));
																
																if (a.length > b.length && b.length) b.forEach((el,i) => c.push(el+a[i]));

																arr.push(c);
															};

		uniteD(mp[0],mp[2],out);
		uniteD(mp[0],mp[3],out);
		uniteD(mp[1],mp[2],out);
		uniteD(mp[1],mp[3],out);

		uniteL(mp[0],letterPos,'n',out);
		uniteL(mp[1],letterPos,'n',out);
		uniteL(mp[2],numberPos,'l',out);
		uniteL(mp[3],numberPos,'l',out);

		// ельзя перескакивать фигуры, если только это не король с проверкой на шах
		out.forEach(el => {
			if (el.length) {
				mark:for (let i = 0; i < el.length; i++) {
					if(!this.checkPos(el[i])) break;
					
					if (!und) {
						for (let j = 0; j < [...this.pop].length; j++) {
							if([...this.pop][j].position == el[i]){
								arr.push(el[i]);
								break mark;
							}
							
						}
					}
					arr.push(el[i]);
				}
			}
		});

		return arr;
	}
}

class King extends Figure {
	constructor (type, position, camp, flag,pop) {
		super(type, position, camp, flag,pop);
		this.create = Figure.createFactory('king');
		this.firstStep = true;
		this.observablesKind = {
			cast: [],
			chah: false,
			chahFrom: [],
			mate: false
		};
	}

	roadSearch(numberPos,letterPos,arr){
		let mp = [], out = [];
		mp[0] = numbers.slice(numbers.indexOf(numberPos)+1)[0];// d
		mp[1] = (numbers.sort((a,b)=>a-b)).slice(numbers.indexOf(numberPos)+1)[0];// u
		numbers.sort((a,b)=>a+b);

		mp[2] = letters.slice(letters.indexOf(letterPos)+1)[0];// r
		mp[3] = (letters.sort((a,b)=>a-b)).slice(letters.indexOf(letterPos)+1)[0];// l

		let uniteL = (a,b,typeArr,arr) => {
																		if (a && b) {
																			let c = (typeArr == 'n') ? b+a : a+b;
																			arr.push(c);
																		}
																	};

		mp[0] ? mp[2] ? out.push(mp[2]+mp[0]) : false : false;
		mp[0] ? mp[3] ? out.push(mp[3]+mp[0]) : false : false;
		mp[1] ? mp[2] ? out.push(mp[2]+mp[1]) : false : false;
		mp[1] ? mp[3] ? out.push(mp[3]+mp[1]) : false : false;

		uniteL(mp[0],letterPos,'n',out);
		uniteL(mp[1],letterPos,'n',out);
		uniteL(mp[2],numberPos,'l',out);
		uniteL(mp[3],numberPos,'l',out);

		// ельзя перескакивать фигуры
		out.forEach(el => {
			if(this.checkPos(el)){
				for (let j = 0; j < [...this.pop].length; j++) {
					if([...this.pop][j].position == el){
						arr.push(el);
						break;
					}
				}
				arr.push(el);
			}
		});

		if (this.firstStep) {
			// letters, letterPos, numberPos
			let left, right, flagL = true, flagR = true;
			left = letters.slice(letters.indexOf('d')+1);
			left.pop(1);
			right = letters.reverse().slice(letters.indexOf('d')+1);
			right.pop(1);
			letters.reverse();

			for (let i = 0; i < left.length; i++) {
				if (document.querySelector(`.${left[i] + numberPos} div`).childNodes.length) {
					flagL = false;
				}
			}
			
			for (let i = 0; i < right.length; i++) {
				if (document.querySelector(`.${right[i] + numberPos} div`).childNodes.length) {
					flagR = false;
				}
			}

			/*
				w
					left - [ "c", "b" ]
					right - [ "e", "f", "g" ]
				b
					left - [ "e", "f", "g" ]
					right - [ "c", "b" ]
			*/

			let castP1 = letters[0]+numberPos,//a1
					castP2 = letters[letters.length-1]+numberPos,//h1
					castF1 = null,
					castF2 = null,
					obs		 = null;

			[...obj].forEach(el => {
				if (el.position == castP1) castF1 = el;
				if (el.position == castP2) castF2 = el;
			});

			if (castF1 && this.camp == castF1.camp && castF1.firstStep){
				flagR ? arr.push(right[1] + numberPos) : false;
				obs = {el: castF1, pos: right[0] + numberPos, pg: right[1] + numberPos};
				this.observablesKind.cast.push(obs);
			}
			
			if (castF2 && this.camp == castF2.camp && castF2.firstStep) {
				flagL ? arr.push(left[1] + numberPos) : false;
				obs = {el: castF2, pos: left[0] + numberPos, pg: left[1] + numberPos};
				this.observablesKind.cast.push(obs);
			}

			// let posCastling;
		}
		// console.log(arr);

		return arr;
	}
}