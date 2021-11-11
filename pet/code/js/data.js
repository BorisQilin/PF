
let app       = document.querySelector('#app'),
    container = createElements(['table']),
    pos       = {l: [], n: [], b: null},
    letters   = ['a','b','c','d','e','f','g','h'],
    numbers   = [8,7,6,5,4,3,2,1],
    camp      = {white: [7,8], black: [1,2]},
    type      = {
                  pawn: ['a','b','c','d','e','f','g','h'],
                  knight: ['b','g'],
                  rook: ['a','h'],
                  bishop: ['c','f'],
                  queen: ['e'],
                  king: ['d']
                },
    cell      = new Set(),
    round     = true;
