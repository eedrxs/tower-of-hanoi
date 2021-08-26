'use strict';

let n = +prompt("Input size on nxn array:","8");
let grid = nxnArray(n);


function nxnArray(n) {
    let array = [];
    for (let i = 0; i < n; i++){
        array[i] = new Array(n);
    }

    return array;
}


