class Pawn extends Figure {
  constructor (type, position, camp, flag) {
    super(type, position, camp, flag);
  }

  choiceFig(world){
    if (!this.flag) return false;

    let vector = 0, count = 1, arr = [];
    let p = (this.position).match(/\d/)[0]*1,//7
        pl = (this.position).match(/\w/)[0];//a

    vector = this.camp ? -1 : 1;

    if (7 == p && this.camp || 2 == p && !this.camp) {
      count = 2;
    }

    while (count--) {
      p += vector;
      arr.push(pl+p);
    }

    world.action('illuminate', [], arr, this);

    console.log(this);
  }
}