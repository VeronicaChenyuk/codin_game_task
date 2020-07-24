  
  // first task
  
  const L = parseInt(readline());
  const H = parseInt(readline());
  const T = readline().toLowerCase();
  for (let i = 0; i < H; i++) {
    const ROW = readline();
    let str = '';
    for (let j = 0; j < T.length; j++) {
      let index = (T[j].charCodeAt(0) - 97) * L;
      (index < 0) && (index = 26 * L);
      str += ROW.slice(index, index + L)
    }
    print(str)
  }

//second task

const [W, H] = readline().split(' ').map(x => +x);
const N = +readline();
let [X, Y] = readline().split(' ').map(x => +x);

let above = 0;
let left = 0;
let below = H - 1;
let right = W - 1;

while (true) {
    const BOMB_DIR = readline();
    BOMB_DIR.includes('L') && (right = X - 1);
    BOMB_DIR.includes('R') && (left = X + 1);
    BOMB_DIR.includes('U') && (below = Y - 1);
    BOMB_DIR.includes('D') && (above = Y + 1);
    X = Math.floor((right + left) / 2);
    Y = Math.floor((above + below) / 2);
    print(X, Y);
}



