// imports
import refs from './refs.js';
const { colors, accessStart, accessStop, accessBody } = refs;
console.log(colors, accessStart, accessStop, accessBody);

import randomIntegerFromInterval from './randomIntegerFromInterval.js';

let timerId = null;

// change color function

function changeColor() {
  timerId = setInterval(() => {
    // assign min and max for randomIntegerFromInterval
    let min = 0;
    let max = colors.length - 1;

    // get color
    let newNumber = randomIntegerFromInterval(min, max);
    let newColor = colors[newNumber];

    // set changing background
    accessBody.style.backgroundColor = `${newColor}`;
  }, 1000);
}

// function start
function switcherStart() {
  accessStart.setAttribute('disabled', 'disabled');
  changeColor();
}

// function stop

function switcherStop() {
  accessStart.removeAttribute('disabled', 'disabled');
  clearInterval(timerId);
}

//  event listeners

accessStart.addEventListener('click', switcherStart);
accessStop.addEventListener('click', switcherStop);
