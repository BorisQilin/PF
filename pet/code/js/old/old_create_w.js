  /*
    function createWorld() {
      let createElements = (arr) => {
            let a = {};
            arr.length == 1 ? a = document.createElement(arr[0]) : arr.forEach(n => a[n] = document.createElement(n));
            return a;
          },
          edgeFill = (arr, flag, parent) => {
            let t = (flag == 'letters') ? createElements(['table', 'tr']) : createElements(['table']);
    
            arr.forEach(letElem => {
              let tc = (flag == 'letters') ? createElements(['td', 'div']) : createElements(['tr','td','div']);
    
              // tc.td.setAttribute('class', letElem);
              tc.div.innerText = letElem;
              
              (flag == 'letters') ? (() => {tc.td.appendChild(tc.div);t.tr.appendChild(tc.td);})()
                                  : (() => {tc.td.appendChild(tc.div);tc.tr.appendChild(tc.td);t.appendChild(tc.tr);})();
            });
    
            (flag == 'letters') ? (() => {t.table.appendChild(t.tr);parent.appendChild(t.table);})()
                                : (() => {parent.appendChild(t);})();
          },
          createFieldsContainer = () => { 
            for (let i = 0; i < 3; i++) {
              let tr = createElements(['tr']);
      
              for (let j = 0; j < 3; j++) {
                let td = createElements(['td']);
      
                ((i == 0 || i == 2) && j == 1) ? (() => {td.setAttribute('class', 'letters');pos.l.push(td);})()
                                              : (i == 1) ? (() => {(j == 1) ? (() => {td.setAttribute('class', 'body');pos.b = td;})()
                                                                            : (() => {td.setAttribute('class', 'numbers');pos.n.push(td);})()})()
                                                          : (() => false)();
                tr.appendChild(td);
              }
              container.appendChild(tr);
            }
          },
          fillFieldsContainer = () => {
            for (const key in pos) {
              (!Array.isArray(pos[key]) && pos[key].getAttribute('class') == 'body') ? (() => {
                let t = createElements(['table']);
      
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
                pos[key].appendChild(t);
                res = t;
              })() : (() => pos[key].forEach(elem => {(elem.getAttribute('class') == 'letters') ? edgeFill(letters, 'letters',elem): edgeFill(numbers, 'numbers',elem);}))();
            }
          },
          app = document.querySelector('#app'),
          container = createElements(['table']),
          pos = {l: [], n: [], b: null},
          letters = ['a','b','c','d','e','f','g','h'],
          numbers = [8,7,6,5,4,3,2,1],
          res = null;

      container.setAttribute('id', 'wrap');
      
      createFieldsContainer();
      fillFieldsContainer();
      app.appendChild(container);

      return res;
    };
  */