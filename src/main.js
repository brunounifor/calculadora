import {operationExecutor} from './functions/operationExecutor.js';

const currentDigit = document.getElementById('currentDigit');
const previousDigit = document.getElementById('previousDigit');
const nums = document.querySelectorAll('[id*=num]');
const clearAll = document.getElementById('clearAll');
const clearCurrent = document.getElementById('clearCurrent')
const del = document.getElementById('delete');
const dot = document.getElementById('dot');
const operators = document.querySelectorAll('[id*=Symbol]')
const equals = document.getElementById('equals');

let first = true;
let currentNum = '0';
let previousNum = '0';
let operator = '';

function insertDisplay(text) {
  document.getElementById('currentDigit').classList.remove('displayDivideBy0')
  if (first) {
    if(text.trim() == '.'){
      currentNum = '0.'
      first = false
    } else if(text.trim() != '0'){
      currentNum = text.trim()
      first = false
    } else {
      currentNum = '0'
      first = true
    }
  } else if (currentNum.length < 12){
    if(currentNum == '0') {
      currentNum = text.trim()
    }else if(!(currentNum.includes('.') && text.trim() == '.')) {
      currentNum += text.trim()
    }
  }
  
  currentDigit.textContent = currentNum
};

function insert(e) {
  insertDisplay(e.target.textContent)
};

nums.forEach(e => e.addEventListener('click', insert));

dot.addEventListener('click', insert);

function cleanAll() {
  document.getElementById('currentDigit').classList.remove('displayDivideBy0')
  previousNum = '0'
  currentNum = '0'
  operator = ''
  first = true
  previousDigit.textContent = previousNum
  currentDigit.textContent = currentNum
}

clearAll.addEventListener('click', cleanAll);

function cleanCurrent() {
  document.getElementById('currentDigit').classList.remove('displayDivideBy0')
  currentNum = '0'
  first = true
  currentDigit.textContent = currentNum
};

clearCurrent.addEventListener('click', cleanCurrent);

function delLast () {
  document.getElementById('currentDigit').classList.remove('displayDivideBy0')
  if(currentNum.length == 1) {
    currentNum = '0'
    first = true
    currentDigit.textContent = currentNum
  } else {
    currentNum = currentNum.slice(0,-1)
    currentDigit.textContent = currentNum
  }
};

del.addEventListener('click', delLast);

function selectOperator(text) {
  document.getElementById('currentDigit').classList.remove('displayDivideBy0')
  switch (text.trim()) {
    case '÷':
      if(previousNum == '0'){
        operator = '/'
        previousNum = currentNum
        currentNum = '0'
        first = true
        previousDigit.textContent = previousNum
        currentDigit.textContent = currentNum
      } else {
        operator = '/'
      }
      break;
    case 'x':
      if(previousNum == '0'){
        operator = '*'
        previousNum = currentNum
        currentNum = '0'
        first = true
        previousDigit.textContent = previousNum
        currentDigit.textContent = currentNum
      } else {
        operator = '*'
      }
      break;
    case '-':
      if(previousNum == '0'){
        operator = '-'
        previousNum = currentNum
        currentNum = '0'
        first = true
        previousDigit.textContent = previousNum
        currentDigit.textContent = currentNum
      } else {
        operator = '-'
      }
      break;
    case '+':
      if(previousNum == '0'){
        operator = '+'
        previousNum = currentNum
        currentNum = '0'
        first = true
        previousDigit.textContent = previousNum
        currentDigit.textContent = currentNum
      } else {
        operator = '+'
      }
  }
}

function keepOperator(e) {
  selectOperator(e.target.textContent)
}

operators.forEach(e => e.addEventListener('click', keepOperator))

function executeOperation() {
  let result = operationExecutor(operator, previousNum, currentNum)
  if(result === 'It\'s not possible to divide by 0') {
    cleanAll()
    currentNum = result
    currentDigit.textContent = currentNum
    document.getElementById('currentDigit').classList.add('displayDivideBy0')
  } else if (result == '') {
    result = '0'
  } else {
    cleanAll()
    currentNum = result
    currentDigit.textContent = currentNum
  }
}

equals.addEventListener('click', executeOperation)