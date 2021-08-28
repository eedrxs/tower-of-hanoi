'use strict';

let n = +prompt("Input size of nxn array:", "4");
let grid = makeGrid(n);









function makeGrid(n) {
  let trFragment = new DocumentFragment();
  let tdFragment = new DocumentFragment();
  let i; let j;


  function makeTdTags() {
    for (j = 0; j < n; j++) {
      let td = document.createElement('td');
      td.id = `${i}${j}`;
      tdFragment.append(td);
    }

    return tdFragment;
  }


  function makeTrTags() {
    for (i = 0; i < n; i++) {
      let tr = document.createElement('tr');
      tr.append(makeTdTags());
      trFragment.append(tr);
    }

    return trFragment;
  }


  function makeArray(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array[i] = new Array(n);
    }

    return array;
  }


  let table = document.createElement('table');
  table.setAttribute('id', 'grid');
  table.style.width = '300px';
  table.style.height = '300px';
  table.border = '1';
  table.style.borderCollapse = 'collapse';
  table.style.textAlign = 'center';

  table.onclick = function(event) {
    let target = event.target;

    if (target.tagName != 'TD') return;

    inputToGrid(target);
  };

  table.append(makeTrTags());
  document.body.append(table);

  return makeArray(n);
}


function inputToGrid(cell) {
  cell.textContent ?
  cell.textContent = '':
  cell.textContent = 'O';

  inputToArray(cell);
}


function inputToArray(cell) {
  let id = cell.id;

  grid[+id.charAt(0)][+id.charAt(1)] ?
  grid[+id.charAt(0)][+id.charAt(1)] = 0:
  grid[+id.charAt(0)][+id.charAt(1)] = 1;
}


function gameOfLife() {
  function determineFate(row, col) {
    let i; let j;
    let neighbours = 0;

    for (i = -1; i < 2; i++) {
      for (j = -1; j < 2; j++) {
        if (i == 0 && j == 0) continue;
        if (grid[row + i][col + j]) neighbours++;
      }
    }

    return (neighbours <= 1 || neighbours >= 4) ? 'willDie': 'willLive';

  }


  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      grid[i][j].fate = determineFate(i, j);
    }
  }

  debugger;
}