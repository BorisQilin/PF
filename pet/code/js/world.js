class World {

  constructor(worldBody){
    this.world = worldBody;
  }

  reset(){
    let a = document.querySelectorAll('.choice');
    a.forEach(elm => elm.classList.remove('choice'));

    if (document.querySelectorAll('.illum').length) {
      document.querySelectorAll('.illum').forEach(elm => {
        cell.forEach((c,k,s) => {
          if(c.path == elm.classList[0]){
            elm.onmouseover = ()=>{};
            elm.onmouseout = ()=>{};
            elm.onclick = ()=>{};
            elm.style.background = '';
			      elm.style.cursor = '';
            elm.classList.remove('illum');
            s.delete(c);
          }
        });
      });
    }

    if (document.querySelectorAll('.beat').length) {
      document.querySelectorAll('.beat').forEach(elm => {
        cell.forEach((c,k,s) => {
          if(c.path == elm.classList[0]){
            elm.onmouseover = ()=>{};
            elm.onmouseout = ()=>{};
            elm.removeEventListener('click', TCell.beatFig,true);
            elm.style.background = '';
			      elm.style.cursor = '';
            elm.classList.remove('beat');
            s.delete(c);
          }
        });

        // console.log(cell);
      });
    }
  }

  illuminate(arr, figure){
    let a = null, td = null;

    // в обычных обстоятельствах
    arr.forEach(elm => {
      td = document.querySelector('.' + elm);
      a = (new TCell(td,elm)).create(figure,this);

      cell.add(a);
    });

    // // работа над шахом
    // let King = [...obj].find(l => l.type == 'king' && l.camp == figure.camp);
    // const ArrGo = (a) => {
    //   let arr = [];
    //   let p = (a.position).match(/\d/)[0]*1,//4
    //       pl = (a.position).match(/\w/)[0];//d
    //   return a.roadSearch(p,pl,arr,true);
    // };
    // let mate = {a:1,b:1,c:1};

    // // если выбран король есть ли куда ему бежать
    // if (figure.type == 'king' && King.observablesKind.chah) {
    //   let kg = ArrGo(figure), kap = [];

    //   mark:for (let i = 0; i < kg.length; i++) {
    //     const el = kg[i];
    //     for (const iter of obj) {
    //       if (iter.camp != figure.camp) {
    //         let a = ArrGo(iter);
    //         if (a.some(x => x == el)) {
    //           // console.log(iter,el);
    //           continue mark;
    //         }
    //       }
    //     }
    //     kap.push(el);
    //   }

    //   // есть ли королю куда пойти?
    //   if (!King.observablesKind.chah) mate.c = !!kap.length;

    //   kap.forEach(elm => {
    //     td = document.querySelector('.' + elm);
    //     a = (new TCell(td,elm)).create(figure,this);
  
    //     cell.add(a);
    //   });
    // }

    // if (!King.observablesKind.chah) {
    //   // не разрешать ход, если после него королю откроется шах
    //   let pt = figure.position, hh = true;
    //   arr.forEach(po => {
    //     figure.position = po;

    //     for (const iter of obj) {
    //       if (iter.camp != King.camp) {
    //         let a = ArrGo(iter);
    //         hh = a.some(x => x == King.position);
    //         if (hh) {
    //           break;
    //         }
    //       }
    //     }

    //     figure.position = pt;
    //   });

    //   if (!hh) {
    //     arr.forEach(elm => {
    //       td = document.querySelector('.' + elm);
    //       a = (new TCell(td,elm)).create(figure,this);
    
    //       cell.add(a);
    //     });
    //   } else {
    //     return false;
    //   }

    // } else if (King.observablesKind.chah) {
    //   // шах от кого
    //   let add = King.observablesKind.chahFrom[0];
    //   // шах от фигуры которая стоит на указанной позиции
    //   let b = add.position;
    //   // направление хода фигуры которая поставила шах
    //   let c = ArrGo(add);
    //   // направление хода своей выбраной фигуры
    //   let d = ArrGo(figure);

    //   // если своя фигура берёт фигуру противника, подсветить только этот ход
    //   let f = d.find(p => p === b);
    //   if (f) {
    //     td = document.querySelector('.' + f);
    //     a = (new TCell(td,f)).create(figure,this);

    //     cell.add(a);
    //   } else {
    //     // фигуру противника никто взять не может
    //     if (!King.observablesKind.chah) mate.b = false;
    //   }

    //   // ?
    //   // * если фигура может закрыть собой короля
    //   // ?

    //   if (add.type != 'knight') {
    //     let moveArr = [], maws = [], tpos = figure.position;

    //     c.forEach(w => {
    //       d.forEach(v => {
    //         w == v ? moveArr.push(w) : false;
    //       });
    //     });
        
    //     // отсеять ходы которые не приводят к исчезновению шаха
    //     moveArr.forEach(elm => {
    //       figure.position = elm;
    //       let ps = ArrGo(add);

    //       let bg = ps.some(x => x == King.position);
    //       if (!bg) maws.push(elm);
    //       figure.position = tpos;
    //     });

    //     if (!King.observablesKind.chah) mate.a = !!maws.length;
        
    //     maws.forEach(elm => {
    //       td = document.querySelector('.' + elm);
    //       a = (new TCell(td,elm)).create(figure,this);
    
    //       cell.add(a);
    //     });
    //   }
    // } else {
    //   return false;
    // }

    // this.mate(King, mate);
  }

  // очерёдность/порядок хода
  phase() {
    // this.chah();

    let timeTd = document.querySelectorAll('td'),
        timeTdWhite = timeTd[0],
        timeTdBlack = timeTd[timeTd.length-1],
        timeClock = new Image(50,50);
    
    timeClock.src = 'img/clock.png';    
    
    round ? (()=>{
      timeTdWhite.appendChild(timeClock);
      timeTdBlack.childNodes.length ? timeTdBlack.removeChild(timeTdBlack.childNodes[0]) : false;
    })() : (()=>{
      timeTdBlack.appendChild(timeClock);
      timeTdWhite.childNodes.length ? timeTdWhite.removeChild(timeTdWhite.childNodes[0]) : false;
    })();

    document.querySelectorAll('.plug').forEach(elm => elm.parentNode.removeChild(elm));

    [...obj].forEach(el => {
      if (el.camp != round) {
        let imp = document.querySelector(`.${el.position}`);
        let plug = createElements(['div']);
        plug.setAttribute('class','plug');
        imp.childNodes[0].insertAdjacentElement('beforeend',plug);
      }
    });
    round = !round;
  }

  // шах
  // ! можно перепрыгивать фигуры - если король отойдёт на клетку назад - он не уйдёт от шаха
  // ! если будет взята фигура - не факт что король уйдёт из под шаха, ибо фигура может быть прикрыта другой. Король не может совершить взятие в ущерб себе
  check(){
    // отталкиваться от очерёдности хода, если ход белых - определить не является ли король под шахом, и если это так, то проверять повлияет ли смена позиции выбраной фигуры на смену положения короля
    const King = round ? [...obj].find(l => l.type == 'king' && l.camp)
                       : [...obj].find(l => l.type == 'king' && !l.camp);
    const ArrGo = (a) => {
      let arr = [];
      let p = (a.position).match(/\d/)[0]*1,//4
          pl = (a.position).match(/\w/)[0];//d
      return a.roadSearch(p,pl,arr,true);
    };

    // после совершения хода проверить находится ли король противоположной стороны в позиции шах/мат
    for (const en of obj) {
      if (en.camp != King.camp) {
        // если у какой-то фигуры следующий ход - взятие короля противника - это ознаменует шах этому королю
        King.observablesKind.chah = ArrGo(en).some(l => l === King.position);

        console.log(ArrGo(en), '\n',King.position, '\n');

        if (King.observablesKind.chah) {
          document.querySelector('.'+King.position).classList.add('chah');
          // кто инициатор
          [...obj].forEach(eni => {
            eni.camp != King.camp ?((ArrGo(eni).some(p => p === King.position)) ? King.observablesKind.chahFrom.push(eni) : false) : false;
          });

          King.observablesKind.chahFrom.forEach(elm => document.querySelector('.'+elm.position).classList.add('chahInit'));
          return false;
        }
        else {
          King.observablesKind.chah = false;
          King.observablesKind.chahFrom = [];
          document.querySelector('.chah') ? document.querySelector('.chah').classList.remove('chah') : false;
          document.querySelector('.chahInit') ? document.querySelector('.chahInit').classList.remove('chahInit') : false;
        }
      }
    }
    return true;
  }

  // // мат
  // mate(king, obj){
  //   console.log(obj);
  //   // объект для определения мата королю
  //   let a = king.observablesKind.mate;
  //   // obj - если все значения объекта = лож, значит королю поставлен мат
  //   for (const par in obj) {
  //     if (Object.hasOwnProperty.call(obj, par)) {
  //       const el = obj[par];
  //       console.log(el);
        
  //       if (el) {
  //         a = false;
  //         continue;
  //       }

  //       a = true;
  //     }
  //   }
  //   if (a) {
  //     let lose = king.camp ? 'Белые' : 'Чёрные';
  //     let win = !king.camp ? 'Белые' : 'Чёрные';
  
  //     alert(lose + ' - проиграли... Победа досталась ' + win);
  //   }
  // }
}