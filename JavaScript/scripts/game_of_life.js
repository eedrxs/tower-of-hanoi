'use strict';

let n = +prompt("Input size of nxn array:", "4");
let grid = makeArray(n);
makeGrid(n);






function makeArray(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = new Array(n);
  }

  return array;
}



function makeGrid(n) {
  let trFragment = new DocumentFragment();
  let tdFragment = new DocumentFragment();
  let i; let j;


  let makeTdTags = () => {
    for (j = 1; j <= n; j++) {
      let td = document.createElement('td');
      td.id = `cell${i}${j}`;
      tdFragment.append(td);
    }

    return tdFragment;
  }


  let makeTrTags = () => {
    for (i = 1; i <= n; i++) {
      let tr = document.createElement('tr');
      tr.append(makeTdTags());
      trFragment.append(tr);
    }

    return trFragment;
  }


  let table = document.createElement('table');

  table.className = 'grid';
  table.style.width = '300px';
  table.style.height = '300px';
  table.border = '1';
  table.append(makeTrTags());

  document.body.append(table);
}







function xmakeGrid(n) {
  let trFragment = new DocumentFragment();
  let tdFragment = new DocumentFragment();
  let table = document.createElement('table');

  console.log(table);

  table.id = 'grid';
  table.style.width = '300px';
  table.style.height = '300px';
  table.border = '1';

  for (let i = 1; i <= n; i++) {
    let tr = document.createElement('tr');

    for (let j = 1; j <= n; j++) {
      let td = document.createElement('td');
      td.id = `cell${i}${j}`;
      tdFragment.append(td);
    }

    trFragment.append(tr);
  }

  console.log(table);
  document.body.append(table);
}


function ymakeGrid(n) {
  let table = document.getElementById('grid');

  for (let i = 1; i <= n; i++) {
    table.insertAdjacentHTML('beforeend', '<tr>');

    for (let j = 1; j <= n; j++) {
      table.insertAdjacentHTML('beforeend', `<td id = 'cell${i}${j}'>`);
    }

    // table.insertAdjacentHTML('beforeend', '<\\tr>');
  }
}