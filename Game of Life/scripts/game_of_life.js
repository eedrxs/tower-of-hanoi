'use strict';

// let n = +prompt("Input size of nxn array:", "4");
let n, grid;
let tablenum = 0;
let survialImg = '<img src="/images/survival.png" style="width: 25px; height: 25px;">';
let birthImg = '<img src="/images/birth.png" style="width: 25px; height: 25px;">';
let isolationImg = '<img src="/images/isolation.png" style="width: 25px; height: 25px;">';
let suffocationImg = '<img src="/images/suffocation.png" style="width: 25px; height: 25px;">';





function getValue() {
  n = document.getElementById('nxn').value;
  grid = makeArray(n);
  initiateTable(makeGrid(n, 'grid'));
}


function makeArray(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = new Array(n);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      array[i][j] = {};
    }
  }

  return array;
}


function initiateTable(table) {
  table.onclick = function(event) {
    let target = event.target;

    if (target.tagName != 'TD') return;

    inputToGrid(target);
  };

  document.getElementById('left').append(table);

  let button = document.createElement('button');
  button.innerHTML = 'Generate';
  button.onclick = function () {
    let iteration = +prompt('How many iterations?', '4');
    gameOfLife(iteration);
  }
  button.className = 'small-button';
  document.getElementById('left').append(button);
}


function makeGrid(n, tag) {
  let trFragment = new DocumentFragment();
  let tdFragment = new DocumentFragment();
  let i; let j;


  function makeTdTags() {
    for (j = 0; j < n; j++) {
      let td = document.createElement('td');
      td.id = `_${i}-${j}`;
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




  let table = document.createElement('table');
  table.setAttribute('id', tag);
  table.append(makeTrTags());

  return table;
}


function inputToGrid(cell) {
  cell.innerHTML ?
  cell.innerHTML = '':
  cell.innerHTML = survialImg;

  inputToArray(cell);
}


function inputToArray(cell) {
  let i = +cell.id.slice(1, cell.id.indexOf('-'));
  let j = +cell.id.slice(cell.id.indexOf('-') + 1)

  grid[i][j].occupied ?
  grid[i][j].occupied = false:
  grid[i][j].occupied = true;
}


function gameOfLife(iteration) {

 function getNeighbours(row, col) {
    let i; let j;
    let neighbours = 0;

    outer: for (i = -1; i < 2; i++) {
      inner: for (j = -1; j < 2; j++) {
        if (i == 0 && j == 0) continue;
        if (row + i < 0 || row + i > n-1) continue outer;
        if (col + j < 0 || col + j > n-1) continue inner;
        if (grid[row + i][col + j].occupied) neighbours++;
      }
    }

    return neighbours;
  }

  function reflectFate(id) {
    let table = document.getElementById(id);

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {

        if (grid[i][j].occupied) {

          switch (grid[i][j].neighbours) {
            case 0:
            case 1:
              table.querySelector(`#_${i}-${j}`).innerHTML = isolationImg;
              break;

              case 2:
              case 3:
                table.querySelector(`#_${i}-${j}`).innerHTML = survialImg;
                break;

              default:
                table.querySelector(`#_${i}-${j}`).innerHTML = suffocationImg;
          }

        } else {
          switch (grid[i][j].neighbours) {
            case 2:
            case 3:
              table.querySelector(`#_${i}-${j}`).innerHTML = birthImg;
              break;

            default:
          }
        }

      }
    }
  }

  function makeNextGeneration(table) {
    let newTable = document.getElementById(table);

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j].neighbours <= 1) {
          grid[i][j].occupied = false;
          newTable.querySelector(`#_${i}-${j}`).innerHTML = '';
        } else if (grid[i][j].neighbours <= 3) {
          grid[i][j].occupied = true;
          newTable.querySelector(`#_${i}-${j}`).innerHTML = survialImg;
        } else {
          grid[i][j].occupied = false;
          newTable.querySelector(`#_${i}-${j}`).innerHTML = '';
        }
      }
    }
  }

  for (let i = 0; i < iteration; i++) {

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        grid[i][j].neighbours = getNeighbours(i, j);
      }
    }

    let hr = document.createElement('hr');

    tablenum++;
    let tableA = makeGrid(grid.length, `${tablenum}a`);
    let tableB = makeGrid(grid.length, `${tablenum}b`);

    document.getElementById('right').append(tableA);
    reflectFate(`${tablenum}a`);

    document.getElementById('right').append(tableB);
    makeNextGeneration(`${tablenum}b`);

    document.getElementById('right').append(document.createElement('hr'));
  }

}