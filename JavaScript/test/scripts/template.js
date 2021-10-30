export class Template {
  constructor(message, disks, currentIteration) {
    this.container = document.createElement('div');
    this.disks = disks;
    this.tags = {
      info: `<div>
              <h3>${message || 'Move ' + currentIteration.move}</h3>
              <p>${message || 'Moved Disk ' + currentIteration.disk + ' from<br>' + currentIteration.from + ' to ' + currentIteration.to}</p>
            </div>`,

      disks:    `<div class='Source'>
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

                  <div class='Auxillary'>
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

                  <div class='Destination'>
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
                  </div>`
    }

  }
  
  
  render() {
    this.container.className = 'container';
    this.container.insertAdjacentHTML('afterbegin',this.tags.info + this.tags.disks);

    let div = this.container.querySelector('.Source').querySelectorAll('div');
    for (let i = this.disks, j = 9; i >= 1;) {
      div[j].className = `disk-${i}`;
      div[j--].innerText = i--;
    }

    return this.container;
  }
}