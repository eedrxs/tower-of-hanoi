'use strict';

let input = {};
let iterationBuffer = [];
let colors;
let move = 0;


function go() {
  input = {
    diskNumber: +document.querySelector('#disks').value,
    checked: document.querySelector('#iterate').checked,
  }

  setColor(input.diskNumber);
}


function setColor(n) {

  colors = new Array(n);

  {
    let hue = Math.trunc(300/n);
    let mix = 0;

    for (let i = 0; i < n; i++) {
    colors[i] = `hsl(${mix += hue}, 100%, 50%)`;
    }
  }

  towerOfHanoi(n, 'src', 'dest', 'aux');
}


function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
  if (n == 1) {
      iterationBuffer[move] = new Iteration(++move, 1, from_rod, to_rod);
      return;
    }

    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    iterationBuffer[move] = new Iteration(++move, n, from_rod, to_rod);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}



class Iteration {
  constructor(move, disk, from, to) {
    this.move = move;
    this.disk = disk;
    this.from = from;
    this.to = to;
  }
}