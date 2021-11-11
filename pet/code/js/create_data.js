let population = (function (camp,type) {
  let population = [];

  for (const c in camp) {
    if (Object.hasOwnProperty.call(camp, c)) {
      let o = {}, pawnRow;

      o.pop = [];
      o.camp = (c == 'white') ? true
                              : false;

      pawnRow = o.camp ? camp[c].filter((el)=>{return el < 8})[0]
                       : camp[c].filter((el)=>{return el > 1})[0];

      for (const name in type) {
        if (Object.hasOwnProperty.call(type, name)) {
          let posFin = (obj,type,array) => {
            let fig = {}, rp = (type == 'pawn') ? pawnRow
                                                : ((o.camp) ? pawnRow+1
                                                            : pawnRow-1);

            fig.pos = [];
            fig.type = type;

            array.forEach(el => {fig.pos.push(el + rp)});
            obj.pop.push(fig);
          };
        
          switch (name) {
            case 'pawn': posFin(o,name,type[name]);
            break;
            case 'knight': posFin(o,name,type[name]);
            break;
            case 'rook': posFin(o,name,type[name]);
            break;
            case 'bishop': posFin(o,name,type[name]);
            break;
            case 'queen': posFin(o,name,type[name]);
            break;
            case 'king': posFin(o,name,type[name]);
            break;
            default: throw 'figure type error';
          }
        }
      }

      population.push(o);
    }
  }
  return population;
})(camp,type),
    obj = new Set();

container.setAttribute('id', 'wrap');
createFieldsContainer(pos);

let w = new World(fillFieldsContainer(pos, numbers, letters));

app.appendChild(container);
    
population.forEach(camp => {
  camp.pop.forEach(name => {
    name.pos.forEach(fig => {
      let a = null;
      switch (name.type) {
        case 'pawn':
          a = new Pawn(name.type, fig, camp.camp, true, obj);
          break;
        case 'knight':
          a = new Knight(name.type, fig, camp.camp, true, obj);
          break;
        case 'rook':
          a = new Rook(name.type, fig, camp.camp, true, obj);
          break;
        case 'bishop':
          a = new Bishop(name.type, fig, camp.camp, true, obj);
          break;
        case 'queen':
          a = new Queen(name.type, fig, camp.camp, true, obj);
          break;
        case 'king':
          a = new King(name.type, fig, camp.camp, true, obj);
          break;
        default:
          a = new Figure(name.type, fig, camp.camp, true, obj);
          break;
      }
      a.create();
      obj.add(a);
    });
  });
});

