const chronometer = new Chronometer()

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft')
const btnRightElement = document.getElementById('btnRight')

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec')
const minUniElement = document.getElementById('minUni')
const secDecElement = document.getElementById('secDec')
const secUniElement = document.getElementById('secUni')
const milDecElement = document.getElementById('milDec')
const milUniElement = document.getElementById('milUni')
const splitsElement = document.getElementById('splits')

function printTime() {
  printMinutes()
  printSeconds()
  //printMilliseconds()
}

function printMinutes() {
  minDecElement.textContent = chronometer
    .computeTwoDigitNumber(chronometer.getMinutes())
    .charAt(0)
  minUniElement.textContent = chronometer
    .computeTwoDigitNumber(chronometer.getMinutes())
    .charAt(1)
}

function printSeconds() {
  secDecElement.textContent = chronometer
    .computeTwoDigitNumber(chronometer.getSeconds())
    .charAt(0)
  secUniElement.textContent = chronometer
    .computeTwoDigitNumber(chronometer.getSeconds())
    .charAt(1)
}

// ==> BONUS
function printMilliseconds() {
  
// milDecElement.textContent =
// milUniElement.textContent =

function printSplit() {
  let li = document.createElement('li')
  li.textContent = chronometer.split()
  splitsElement.appendChild(li)
}

function clearSplits() {
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  btnLeftElement.classList.remove('start')
  btnLeftElement.classList.add('stop')
  btnLeftElement.textContent = 'STOP'
}

function setSplitBtn() {
  btnRightElement.classList.remove('reset')
  btnRightElement.classList.add('split')
  btnRightElement.textContent = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop')
  btnLeftElement.classList.add('start')
  btnLeftElement.textContent = 'START'
}

function setResetBtn() {
  btnRightElement.classList.remove('split')
  btnRightElement.classList.add('reset')
  btnRightElement.textContent = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.textContent === 'START') {
    setStopBtn()
    setSplitBtn()
    chronometer.start(printTime)
  } else {
    // STOP
    setStartBtn()
    setResetBtn()
    chronometer.stop()
  }
})

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.textContent === 'SPLIT') {
    printSplit()
  } else {
    // RESET
    chronometer.reset()
    printSeconds()
    printMinutes()
    clearSplits()
  }
})
