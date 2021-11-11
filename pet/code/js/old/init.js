// инициализация массива объектов фигур -> использовать для написания ф-ции с отрисовкой картинок и привязки картинка-объект
let obj = [];

population.forEach(camp => {
    camp.pop.forEach(name => {
        name.pos.forEach(fig => {
            let a = null;
            switch (name.type) {
                case 'pawn':
                    a = new Pawn(name.type, fig, camp.camp, true);
                    break;
                default:
                    a = new Figure(name.type, fig, camp.camp, true);
                    break;
            }
            a.create();
            obj.push(a);
        });
    });
});

for (let i = 0; i < document.images.length; i++) {
    document.images[i].setAttribute('draggable','false');
}

app.addEventListener('mousemove',function(e){
    e.target.ownerDocument.defaultView.getSelection().removeAllRanges();
});