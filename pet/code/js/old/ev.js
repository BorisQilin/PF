let kn = document.querySelector('.d8');

// console.log(kn.childNodes[0].childNodes[0]);
let a = 0;
document.querySelector('.body').addEventListener('click', function (event) {
    a >= 0 ? a += 10 : a -= 10;
    console.log(this);
}/*, 1*/);

kn.addEventListener('click', function (event) {
    a >= 10 ? a += 20 : a -= 20;
    console.log(this);
    /*
        event.eventPhase
            1 - перехват
            2 - обработка на целевом элементе
            3 - всплытие
    */ 
    console.log(event.eventPhase);
    event.stopImmediatePropagation();
    event.stopPropagation();
    console.log(event.target);
}/*, 1*/);

kn.childNodes[0].childNodes[0].addEventListener('click', function (event) {
    a > 0 ? this.classList.add('positive-' + a) : this.classList.add('negative-' + a);
    console.log(this);
    console.log(event.target);
    console.log(event.currentTarget);// указывает на элемент, чей обработчик обрабатывает событие в текущий момент
    console.log(event.type);
}/*, 1*/);


/*
function goListen(e) {
    if (e.cancelable) {
        e.preventDefault();// отменяет поведение по умолчанию
    }
    console.log(e.cancelable);
    alert('hello');
}

let link = document.querySelector('.go'),
    cb = () => goListen(event);

link.addEventListener('click', cb);

document.addEventListener('click', function (e) {
    link.removeEventListener('click', cb);
});
*/
