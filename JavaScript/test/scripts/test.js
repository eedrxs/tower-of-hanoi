'use strict';

import {Template} from './template.js';
document.getElementById('go-button').onclick = () => hanoi.go();

//let template;
let hanoi = {
  disks: null,
  iterate: null,
  buffer: [],
  colors: null,
  move: 0,
  template: null,
  wrapper: document.querySelector('.wrapper'),

  Iteration: class {
    constructor(move, disk, from, to) {
      this.move = move;
      this.disk = disk;
      this.from = from;
      this.to = to;
    }
  },


  go() {
    this.disks = +document.querySelector('#disks').value;
    this.iterate = document.querySelector('#iterate').checked;
    if (this.disks > 10 || this.disks < 1) {
      alert('Only values between 1 - 10 allowed!');
      return;
    }
    this.setColor(this.disks);
    this.towerOfHanoi(this.disks, 'Source', 'Destination', 'Auxillary');
    this.renderDisks();
    this.activateArrow();

      //console.log(this);
    
  },
  
  
  renderDisks() {
    let template = new Template(' ');
    template.container.className = 'container';
    template.container.insertAdjacentHTML('afterbegin',template.tags);
    
    let div = template.container.querySelector('#source').querySelectorAll('div');
    for (let i = this.disks, j = 9; i >= 1;){
      div[j].className = `disk-${i}`;
      div[j--].innerText = i--;
    }
    
    this.wrapper.append(template.container);
    template.initialRender = '';
    
      
      template = new Template('', this.buffer[0]);
      template.container.className = 'container';
      template.container.insertAdjacentHTML('afterbegin',template.tags);
      div = template.container.querySelector('#source').querySelectorAll('div');
    for (let i = this.disks, j = 9; i >= 1;){
      div[j].className = `disk-${i}`;
      div[j--].innerText = i--;
    }
    
    
    this.wrapper.append(template.container);
    console.log(hanoi.buffer[0]);
    this.template = template;
        console.log(template);
  },


  setColor(n) {
    this.colors = new Array(n);
    let hue = Math.trunc(300/n);
    let mix = 0;
    for (let i = 0; i < n; i++) {
      this.colors[i] = `hsl(${mix += hue}, 100%, 50%)`;
     }
     return;
  },


  towerOfHanoi(n, from_rod, to_rod, aux_rod) {
    if (n == 1) {
        this.buffer[this.move] = new this.Iteration(++this.move, 1, from_rod, to_rod);
        return;
      }
  
      this.towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
      this.buffer[this.move] = new this.Iteration(++this.move, n, from_rod, to_rod);
      this.towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
  },
  
  
  activateArrow() {
    let arrow = document.querySelector('#arrow');
    arrow.style.visibility = 'visible';
    arrow.addEventListener('click',this.renderNext);
    arrow.addEventListener('dblclick',this.renderAll);
  },


  attach(scriptPath) {
    let script = document.createElement('script');
    script.src = scriptPath;
    script.type = 'module';
    document.body.append(script);
  },
}






