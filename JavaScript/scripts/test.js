let hanoi = {
  disks: null,
  iterate: null,
  buffer: {},
  colors: null,
  move: 0,

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
  }
}

let template = {
  hasMessage: ' ',

  tags: `<div class="container">
                <div>
                  <h3>${this.hasMessage || 'Move ' + hanoi.buffer[foo].move}</h3>
                  <p>${this.hasMessage || 'Moved Disk ' + hanoi.buffer[foo].disk + '<br>from ' + hanoi.buffer[foo].from + 'to ' + hanoi.buffer[foo].to}</p>
                </div>

                <div>
                  <p class="font-size-1">SOURCE</p>
                  <table>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                  </table>
                </div>

                <div>
                  <p class="font-size-1">AUXILLARY</p>
                  <table>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                  </table>
                </div>

                <div>
                  <p class="font-size-1">DESTINATION</p>
                  <table>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><div></div></td>
                    </tr>
                  </table>
                </div>
              </div>`
}