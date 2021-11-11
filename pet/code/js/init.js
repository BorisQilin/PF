for (let i = 0; i < document.images.length; i++) {
    document.images[i].setAttribute('draggable','false');
}

app.addEventListener('mousemove',function(e){
    e.target.ownerDocument.defaultView.getSelection().removeAllRanges();
});


// не важно для какого элемента вызван метод, так как наблюдателя добавляем в супер класс
[...obj][0].addObserver(w);
// сразу определяем чей ход и блокируем фигуры соперника
w.phase();
