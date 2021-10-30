export class Template {
  constructor(message, currentIteration) {
    this.container = document.createElement('div');
    this.container2 = document.createElement('div');
    this.tags = ` <div>
                    <h3>${message || 'Move ' + currentIteration.move}</h3>
                    <p>${message || 'Moved Disk ' + currentIteration.disk + ' from<br>' + currentIteration.from + ' to ' + currentIteration.to}</p>
                  </div>

                  <div id='source'>
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
                  </div>`;

  }
    
  
    classifyContainer() {
      this.container.className = 'container';
      document.querySelector('.wrapper').insertAdjacentElement('afterbegin',this.tags);
    }
  
    render() {
      this.container.className = 'container';
      document.querySelector('.wrapper').insertAdjacentElement('afterbegin',this.tags);
    }
  
    
  }