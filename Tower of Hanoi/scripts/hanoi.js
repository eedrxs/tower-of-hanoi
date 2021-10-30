import {Template} from './template.js';
document.getElementById('go-button').onclick = () => hanoi.go();

const hanoi = {
  disks: null,
  iterate: null,
  buffer: [],
  colors: null,
  move: 0,
  pos: 0,
  prevRender: null,
  wrapper: document.querySelector('.wrapper'),
  counter: document.querySelector('#buffer'),
  arrow: document.querySelector('#arrow'),
  copyright: document.querySelector('#copyright'),
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
    this.renderInitial();

    if (this.iterate) {
      this.initialScroll();
      this.renderAll();
      document.querySelector('#iteration-hr').style.visibility = 'visible';
      return;
    }

    this.activateArrow();
    this.initialScroll();
  },


  renderAll() {
    this.arrow.style.visibility = 'hidden';
    this.iterate = true;
    this.renderNext();
  },


  renderNext() {
    let template = new Template('', null, this.buffer[this.pos]);
    let message = template.tags.info;
    let arrangement = this.prevRender.slice(this.prevRender.indexOf('</div>') + 6);
    let container = document.createElement('div');

    container.className = 'container';
    container.insertAdjacentHTML('afterbegin', message + arrangement);
    let disk = container.querySelector(`.${this.buffer[this.pos].from}`).querySelector(`.disk-${this.buffer[this.pos].disk}`);
    
    if (!(container.querySelector(`.${this.buffer[this.pos].to}`).querySelector('div[class^="disk"]'))) {
      let div = container.querySelector(`.${this.buffer[this.pos].to}`).querySelectorAll('div');
      div[9].className = disk.className;
      div[9].innerText = disk.innerText;
    } else {
      let div = container.querySelector(`.${this.buffer[this.pos].to}`).querySelectorAll('div[class^="disk"]');
      div[0].parentElement.parentElement.previousElementSibling.children[1].firstElementChild.className = disk.className;
      div[0].parentElement.parentElement.previousElementSibling.children[1].firstElementChild.innerText = disk.innerText;
    }

    disk.className = '';
    disk.innerText = '';
    this.wrapper.append(container);
    this.counter.innerText = this.move - this.pos - 1;
    this.prevRender = container.innerHTML;
    this.pos++;

    if ((this.move - this.pos - 1) < 0) {
      this.displayCopyright();
      return;
    } else if (this.iterate) {
      this.renderNext();
      return;
    }

    document.documentElement.scrollTop += 800;
  },
  
  
  renderInitial() {
    document.querySelector('#disks').disabled = true;
    document.querySelector('#go-button').disabled = true;
    document.querySelector('#iterate').disabled = true;

    let template = new Template(' ', this.disks);
    this.wrapper.append(template.render());
    this.prevRender = template.container.innerHTML;
  },


  setColor(n) {
    this.colors = new Array(n);
    let hue = Math.trunc(300/n);
    let mix = 0;
    for (let i = 0; i < n; i++) {
      this.colors[i] = `hsl(${mix += hue}, 100%, 50%)`;
     }
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
    this.counter.innerText = this.move;
    document.querySelector('#iteration-hr').style.visibility = 'visible';
    this.arrow.style.visibility = 'visible';
    this.arrow.addEventListener('click', () => {hanoi.renderNext();
      document.documentElement.scrollTop += 800;
    });
    // this.arrow.addEventListener('dblclick', () => hanoi.renderAll());
  },


  displayCopyright() {
    this.copyright.style.visibility = 'visible';
    this.arrow.style.visibility = 'hidden';
  },


  initialScroll() {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.scrollTop += 200;
    document.documentElement.style.scrollBehavior = '';
  }
}