function createElements (arr) {
  let a = {};
  arr.length == 1 ? a = document.createElement(arr[0])
                  : arr.forEach(n => a[n] = document.createElement(n));
  return a;
};

function edgeFill (arr, flag, parent) {
  let t = (flag == 'letters') ? createElements(['table', 'tr'])
                              : createElements(['table']);

  arr.forEach(letElem => {
    let tc = (flag == 'letters') ? createElements(['td', 'div'])
                                 : createElements(['tr','td','div']);

    tc.div.innerText = letElem;
    
    (flag == 'letters') ? (() => {
                                    tc.td.appendChild(tc.div);
                                    t.tr.appendChild(tc.td);
                                  })()
                        : (() => {
                                    tc.td.appendChild(tc.div);
                                    tc.tr.appendChild(tc.td);
                                    t.appendChild(tc.tr);
                                  })();
  });

  (flag == 'letters') ? (() => {
                                  t.table.appendChild(t.tr);
                                  parent.appendChild(t.table);
                                })()
                      : (() => {
                                  parent.appendChild(t);
                              })();
};

function createFieldsContainer (pos) { 
  for (let i = 0; i < 3; i++) {
    let tr = createElements(['tr']);

    for (let j = 0; j < 3; j++) {
      let td = createElements(['td']);

      ((i == 0 || i == 2) && j == 1) ? (() => {
                                                td.setAttribute('class', 'letters');
                                                pos.l.push(td);
                                              })()
                                     : (i == 1) ? (() => {
                                                          (j == 1) ? (() => {
                                                                              td.setAttribute('class', 'body');
                                                                              pos.b = td;
                                                                            })()
                                                                   : (() => {
                                                                              td.setAttribute('class', 'numbers');
                                                                              pos.n.push(td);
                                                                            })()
                                                          })()
                                                : (() => false)();
      tr.appendChild(td);
    }

    container.appendChild(tr);
  }
};

function fillFieldsContainer(pos, numbers, letters) {
  let t = null;

  function createBody(fild) {
    t = createElements(['table']);

    numbers.forEach((numElm) => {
      let tcr = createElements(['tr']);

      letters.forEach((lettElm) => {
        let tcd = createElements(['td', 'div']);

        tcd.td.appendChild(tcd.div);
        tcd.td.setAttribute('class', lettElm+numElm);
        tcr.appendChild(tcd.td);
      });
      t.appendChild(tcr);
    });
    fild.appendChild(t);
  }

  function createEdge(fild) {
    fild.forEach(elem => {
      elem.getAttribute('class') == 'letters' ? edgeFill(letters, 'letters',elem)
                                              : edgeFill(numbers, 'numbers',elem);
    })
  }

  for (const key in pos) {
    (!Array.isArray(pos[key]) && pos[key].getAttribute('class') == 'body') ? createBody(pos[key])
                                                                           : createEdge(pos[key]);
  }

  return t;
}