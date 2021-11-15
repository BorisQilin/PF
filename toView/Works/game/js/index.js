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
  constructor(x,y,obj,ex) {
    this.x = x;
    this.y = y;
    this.ex = ex;
    this.obj = obj;
  }

  question(player){
    document.querySelector('.modal').classList.add('modal_open');
    document.querySelector('.form__x').innerHTML = this.ex.a;
    document.querySelector('.form__y').innerHTML = this.ex.b;
    let res = null,
        trueRes = this.ex.c,
        point = this.ex.points,
        d = 0,
        p = 0;

    document.querySelector('.form__send').onclick = function (event) {
      res = document.querySelector('.form__resp').value
      if (res == trueRes) {
        p = document.querySelector('.points').innerText*1 + point;
        document.querySelector('.points').innerText = p;
        document.querySelector('.form__info').innerText = 'Правильно!';
      } else {
        d = res - trueRes < 0 ? res - trueRes : (res - trueRes)*-1;
        console.log(d);
        p = document.querySelector('.points').innerText*1 + point+d;
        document.querySelector('.points').innerText = p;

        document.querySelector('.form__info').innerText = d > 0 ? `Вы ошиблись на ${d}. Получаете 200 - ${d} очок` : `Вы ошиблись на ${d}. Получаете 200 - ${d*-1} очок`;
      }

      setTimeout(()=>{
        document.querySelector('.form__resp').value = '';
        document.querySelector('.form__info').innerText = ''
        this.parentNode.parentNode.classList.remove('modal_open');
        this.onclick = null;
        player.points = document.querySelector('.points').innerText*1;
        console.log(player.points);
      }, 2500);
    };


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
    this.points = 0;
  }

  apdate(){
    this.x = coords(this.obj, 'x');
    this.y = coords(this.obj, 'y');

    // console.log(this.x,this.y);

    let stop = Player.obs[this.stopCount];

    let x = this.x-stop.x, y = this.y-stop.y;

    if (x <= 3 && x > -3 && y <= 3 && y > -3) {
      console.log(stop);
      // stop.question(this);
      this.stopCount++;
      this.stop();
    }
  }

  begin(){
    this.obj.style["animation"] = `move-along 30000ms 0ms 1 alternate linear both`;

    let dots = document.querySelectorAll('.dot');

    dots.forEach((el,i) => {
      let x = coords(el, 'x'),
          y = coords(el, 'y')-60,
          newDot = new Dot(x,y,el,exercise[i]);

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