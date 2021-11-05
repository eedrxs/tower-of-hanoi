'use strict';

let n, grid, counter = 0;
let tablenum = 0;
let survialImg = '<img src="/test2/images/survival.svg"">';
let birthImg = '<img src="/test2/images/birth.svg"">';
let isolationImg = '<img src="/test2/images/isolation.svg"">';
let suffocationImg = '<img src="/test2/images/suffocation.svg"">';





function getValue() {
  n = +document.getElementById('n-value').value;
  if (n == null || n < 4) {
    alert('Input a value greater than or equal to 4');
    return
  }

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

    if (target.tagName == 'IMG') target = event.target.parentElement;


    inputToGrid(target);
  };

  document.getElementById('init-div').append(table);

  let button = document.createElement('button');
  button.innerHTML = 'GO!';
  button.onclick = function () {
    let iteration = +prompt('How many iterations?', '4');
    gameOfLife(iteration);
  }
  button.className = 'small-button';
  document.getElementById('init-div').append(button);
  document.getElementById('init-div').append(document.createElement('hr'));
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

    document.body.insertAdjacentHTML('beforeend', `<p style="margin: -5px 0 10px 18px; font-size: 0.8em; color: var(--dim-white);">Iteration ${++counter}</p>`);

    document.body.append(tableA);
    reflectFate(`${tablenum}a`);

    document.body.append(tableB);
    makeNextGeneration(`${tablenum}b`);

    document.body.append(document.createElement('hr'));
  }

}