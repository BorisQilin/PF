const exercise = (() => {
  let quantity = 53,
      i = 0,
      arr = [],
      a,
      b;
      
  while (i < quantity) {
    let exerciseItem = {};

    a = (()=>(Math.random()*100).toFixed()*1)();
    b = (()=>(Math.random()*100).toFixed()*1)();

    exerciseItem.id = i;
    exerciseItem.a = a;
    exerciseItem.b = b;
    exerciseItem.c = exerciseItem.a + exerciseItem.b;
    exerciseItem.points = 200;
    i++;
    arr.push(exerciseItem);
  }

  return arr;
})();