let enter = prompt('Ввести число', 0);

let enterTwo = prompt('Ввести число', 0);

let action = prompt('Ввести действие над числами');


function sum(enter, enterTwo) {
  let sum = Number(enter) + Number(enterTwo);
  alert(sum);
}

function diff(enter, enterTwo) {
    alert(enter - enterTwo);
}

function compos(enter, enterTwo) {
    alert(enter * enterTwo);
}

function div(enter, enterTwo) {
    alert(enter / enterTwo);
}

if(action === '+') sum();
else if(action === '-') diff();
else if(action === '*') compos();
else if(action === '/') div();