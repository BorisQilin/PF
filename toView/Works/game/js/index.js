// move
let step,
    stop = () => {
      p.apdate();
      if (p.x > 703) p.stop();
    };

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

    this.x = (this.obj.getBoundingClientRect().x).toFixed()*1
    this.y = (this.obj.getBoundingClientRect().y).toFixed()*1;
    this.stopCount = 1;
  }

  apdate(){
    this.x = (this.obj.getBoundingClientRect().x).toFixed()*1
    this.y = (this.obj.getBoundingClientRect().y).toFixed()*1;

    let stop = Player.obs[this.stopCount];

    
    // console.log(stop);
    // console.log('stop   ',stop.x, stop.y);
    // console.log('player   ',this.x, this.y);
    
    if ((this.x >= stop.x-3 && this.x <= stop.x+3) && (this.y >= stop.y-3 && this.y <= stop.y+3)) {
      this.obj.style.animationPlayState = "paused";
      this.stopCount++;
    }
  }

  begin(){
    this.obj.style["animation"] = `move-along 30000ms 0ms 1 alternate linear both`;

    let dots = document.querySelectorAll('.dot');

    dots.forEach(el => {
      let x = (el.getBoundingClientRect().x).toFixed()*1 - 5,
          y = (el.getBoundingClientRect().y).toFixed()*1 - 63;

      let newDot = new Dot(x,y,el);
  
      Player.obs.push(newDot);
      if (!step) step = setInterval(stop,5);
    });
  }

  stop(){
    this.obj.style.animationPlayState = "paused";
    clearInterval(step);
    step = null;
  }

  go(){
      return () => this.obj.style.animationPlayState = "running";
  }
};


let p = new Player();
document.querySelector('.navigation__activate').addEventListener('click', e => {
  e.preventDefault();
  p.begin();
  p.go()();
});
// move end

