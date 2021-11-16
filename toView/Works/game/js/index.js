// move
let step,
    globalStop = () => {
      p.apdate();
      if (p.x == Player.obs[Player.obs.length-1].x && p.y == Player.obs[Player.obs.length-1].y) {
        p.stop();
      }
      // console.log('go');
    },
    coords = (element, vector) => element.getBoundingClientRect()[vector] - element.parentNode.getBoundingClientRect()[vector];

// отдельный класс для точек останова, для задания функционала можно отнаследовать и сделать списки заданий для каждого экземпляра
class Dot{
  constructor(x,y,obj) {
    this.x = x;
    this.y = y;
    this.obj = obj;
  }
};

class Player{
  static obs = [];

  constructor() {
    this.obj = document.querySelector('.player');
    this.traectory = document.querySelector('.wayGo path').attributes.d.nodeValue;
    this.obj.style["offset-path"] = `path("${this.traectory}")`;
    this.x = coords(this.obj, 'x');
    this.y = coords(this.obj, 'y');
    this.stopCount = 1;
  }

  apdate(){
    this.x = coords(this.obj, 'x');
    this.y = coords(this.obj, 'y');

    // console.log(this.x,this.y);

    let stop = Player.obs[this.stopCount];

    let x = this.x-stop.x, y = this.y-stop.y;

    if (x <= 5 && x > -5 && y <= 5 && y > -5) {
      console.log(stop);
      this.stopCount++;
      this.stop();
    }
  }

  begin(){
    this.obj.style["animation"] = `move-along 30000ms 0ms 1 alternate linear both`;

    let dots = document.querySelectorAll('.dot');

    dots.forEach(el => {
      let x = coords(el, 'x'),
          y = coords(el, 'y')-60,
          newDot = new Dot(x,y,el);

      Player.obs.push(newDot);
      if (!step) step = setInterval(globalStop,5);
    });
  }

  stop(){
    this.obj.style.animationPlayState = "paused";
    clearInterval(step);
    step = null;
  }

  go(){
    if (!step) step = setInterval(globalStop,5);
    return () => this.obj.style.animationPlayState = "running";
  }
};

let p = new Player();
document.querySelector('.navigation__activate').addEventListener('click', e => {
  e.preventDefault();
  if (!Player.obs.length) p.begin();
  p.go()();
});
// move end