
let createElements = (arr) => {
                                let a = {};
                                arr.length == 1 ? a = document.createElement(arr[0]) : arr.forEach(n => a[n] = document.createElement(n));
                                return a;
                              },
    edgeFill = (arr, flag, parent) => {
                                        let t = (flag == 'letters') ? createElements(['table', 'tr']) : createElements(['table']);

                                        arr.forEach(letElem => {
                                          let tc = (flag == 'letters') ? createElements(['td', 'div']) : createElements(['tr','td','div']);

                                          tc.div.innerText = letElem;
                                          
                                          (flag == 'letters') ? (() => {tc.td.appendChild(tc.div);t.tr.appendChild(tc.td);})()
                                                              : (() => {tc.td.appendChild(tc.div);tc.tr.appendChild(tc.td);t.appendChild(tc.tr);})();
                                        });

                                        (flag == 'letters') ? (() => {t.table.appendChild(t.tr);parent.appendChild(t.table);})()
                                                            : (() => {parent.appendChild(t);})();
                                      },
    app = document.querySelector('#app'),
    container = createElements(['table']),
    pos = {l: [], n: [], b: null},
    letters = ['a','b','c','d','e','f','g','h'],
    numbers = [8,7,6,5,4,3,2,1],
    population = [
                  {
                    camp: true,
                    pop: [
                      {type: 'pawn', pos: []},//пешка
                      {type: 'knight', pos: []},//конь
                      {type: 'rook', pos: []},//ладья
                      {type: 'bishop', pos: []},//слон
                      {type: 'queen', pos: []},//ферзь
                      {type: 'king', pos: []},//король
                    ]
                  },
                  {
                    camp: false,
                    pop: [
                      {type: 'pawn', pos: []},//пешка
                      {type: 'knight', pos: []},//конь
                      {type: 'rook', pos: []},//ладья
                      {type: 'bishop', pos: []},//слон
                      {type: 'queen', pos: []},//ферзь
                      {type: 'king', pos: []},//король
                    ]
                  }
                ],
    figuresPosition = [
                        {
                          type: 'pawn',
                          pos: {
                            row: {b: 2, w: 7},
                            cell: ['a','b','c','d','e','f','g','h']
                          }
                        },
                        {
                          type: 'knight',
                          pos: {
                            row: {b: 1, w: 8},
                            cell: ['b','g']
                          }
                        },
                        {
                          type: 'rook',
                          pos: {
                            row: {b: 1, w: 8},
                            cell: ['a','h']
                          }
                        },
                        {
                          type: 'bishop',
                          pos: {
                            row: {b: 1, w: 8},
                            cell: ['c','f']
                          }
                        },
                        {
                          type: 'queen',
                          pos: {
                            row: {b: 1, w: 8},
                            cell: ['e']
                          }
                        },
                        {
                          type: 'king',
                          pos: {
                            row: {b: 1, w: 8},
                            cell: ['d']
                          }
                        },
                      ];

class World {
  static res = null;

  static createFieldsContainer(pos) { 
    for (let i = 0; i < 3; i++) {
      let tr = createElements(['tr']);

      for (let j = 0; j < 3; j++) {
        let td = createElements(['td']);

        ((i == 0 || i == 2) && j == 1) ? (() => {td.setAttribute('class', 'letters');pos.l.push(td);})()
                                        : (i == 1) ? (() => {(j == 1) ? (() => {td.setAttribute('class', 'body');pos.b = td;})()
                                                                    : (() => {td.setAttribute('class', 'numbers');pos.n.push(td);})()})()
                                                  : (() => false)();
        tr.appendChild(td);
      }
      container.appendChild(tr);
    }
  }

  static fillFieldsContainer(pos, numbers, letters) {
    for (const key in pos) {
      (!Array.isArray(pos[key]) && pos[key].getAttribute('class') == 'body') ? (() => {
        let t = createElements(['table']);

        numbers.forEach((numElm) => {
          let tcr = createElements(['tr']);

          letters.forEach((lettElm) => {
            let tcd = createElements(['td', 'div']);

            tcd.td.appendChild(tcd.div);
            tcd.td.setAttribute('class', lettElm+numElm);
            tcr.appendChild(tcd.td);
          });
          t.appendChild(tcr);
        });
        pos[key].appendChild(t);
        World.res = t;
      })() : (() => pos[key].forEach(elem => {(elem.getAttribute('class') == 'letters') ? edgeFill(letters, 'letters',elem): edgeFill(numbers, 'numbers',elem);}))();
    }
  }

  constructor(){
    this.world = World.res;
  }

  createWorld() {
    container.setAttribute('id', 'wrap');
  
    World.createFieldsContainer(pos);
    World.fillFieldsContainer(pos, numbers, letters);
    app.appendChild(container);

    this.world = World.res;
  }

  // описать реакции мира (доски) на события, как изменяется мир относительно происходящего события
  action(actionName, PopArr, illuminatePosition, fig){
    let a = null, td = null, tdArr = [];
    switch (actionName) {
      case 'choice':
        /*
          * фигура выбрана для совершения хода (показать доступные направления для совершения перемещения)
        */
        PopArr.forEach(element => {
          if (element.choice) {
            a = element;
          }
        });
        // console.log(this.world);

        a.choiceFig(this);

        break;
      case 'illuminate':
        /*
          * подсветка пути
        */
        illuminatePosition.forEach(elm => {
          td = document.querySelector('.' + elm);
          tdArr.push(td);
          td.classList.add('illum');
          td.onmouseover = function (e) {
            this.style.background = '#fff';
            this.style.cursor = 'crosshair';
          };
          td.onmouseout = function (e) {
            this.style.background = '';
            this.style.cursor = '';
          };
        });
        // break;
      case 'move':
        tdArr.forEach(el => {
          el.onclick = function (e) {
            fig.position = el.getAttribute('class');
            console.log(fig.position);
          };

          console.log(fig);
        });

        /*
          * выбраной фигурой совершили ход (убрать со старой позиции, переместить на новую позицию)
        */
        break;
      case 'beat':
        /*
          * в связи с ходом была забрана фигура соперника (переместить на поле где стояла фигура соперника)
        */
        break;
      case 'death':
        /*
          * фигура покинула доску (убрать с поля)
        */
        break;
      default:
        break;
    }
  }

  // после события (выбор фигуры, совершение хода, уход фигуры с доски...) вызвать функцию обновления состояния доски
  update(){}
}

let initBeginGame = () => {
  /*
    * инициализация начала игры 
      - очистка мира (пересоздать поле-доску)
      - инициализировать стартовые позиции фигур
      - разместить фигуры-изображения в должные позиции
  */
}

let world = new World();
world.createWorld();
// console.log(world);

world.world.addEventListener('click', function () {
  let gr = this.querySelectorAll('tr');
  obj.forEach(elm => {elm.choice = false; elm.action = '';});
  
  gr.forEach(elm => {
    let gd = elm.querySelectorAll('td div');
    gd.forEach(el => el.classList.remove('choice'));
    gd.forEach(el => el.parentNode.classList.remove('illum'));

    this.querySelectorAll('.illum').forEach(el => {
      el.onmouseover = ()=>{};
      el.onmouseout = ()=>{};
      el.onclick = ()=>{};

      el.style.background = '';
      el.style.cursor = '';
    });
    
  });

  // console.log(obj);
},1);

// ф-я инициализации стартовых позиций
function popPosFill(pos,arr) {
  let row = pos.pos.row,
      type = pos.type,
      cell = pos.pos.cell,
      c = '';

  arr.forEach(element => {
    c = element.camp ? row.w : row.b;
    element.pop.forEach(elm => {
      if(elm.type === type) {
        cell.forEach(b => {
          elm.pos.push(b+c);
        });
      }
    });
  });
};

// изменение начальных входных данных с прописыванием стартовых позиций фигур
figuresPosition.forEach(elm => popPosFill(elm,population));

// наследовать как суперкласс, наследовать подклассами фигур соответствующих типов
class Figure {
  constructor (type, position, camp, flag) {
    this.type = type;
    this.position = position;
    this.camp = camp;
    this.flag = flag;
    this.img = null;
    this.choice = false;
    this.action = '';
  }

  // отрисовка
  create(){
    let path = 'img/', that = this;
    this.img = new Image(100,100);

    let p = this.camp ? 'w/' : 'b/';
    path += p; // -> '../img/w/'

    switch (this.type) {
      case 'pawn':
        path += 'pawn.png'
        break;
      case 'knight':
        path += 'knight.png'
        break;
      case 'rook':
        path += 'rook.png'
        break;
      case 'bishop':
        path += 'bishop.png'
        break;
      case 'queen':
        path += 'queen.png'
        break;
      case 'king':
        path += 'king.png'
        break;
      default:
        throw 'figure type error';
    }
    this.img.src = path;

    document.querySelector('.' + this.position + ' div').appendChild(this.img);

    this.img.addEventListener('click', function () {
      that.action = 'choice';
      that.choice = true;
      this.parentNode.classList.add('choice');

      world.action('choice', obj);

      // console.log(event);
    },1);
  }

  // выбор фигуры
  choiceFig(){}

  // простой ход, без происшествия
  move(){}

  // ход с дальнейшим уходом фигуры соперника
  beat(){}

  // собственный уход фигуры с доски
  death(){}
};




  /*
    1. правила мира
      a. обновлять доску на наличие фигур (актуальных)
      б. лог собый на доске
    2. жители
    3. для короля особые условия - дополнительный параметр на позицию под ударом, ракировка
    4. для пешек особые условия:
        - ход на 2-е клетки "на своём" поле;
        - если дошла к противоположному концу доски - "перерождение" в старшую фигуру;
  */