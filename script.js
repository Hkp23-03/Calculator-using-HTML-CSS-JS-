let display = document.querySelector('input[name="display"]');
let operators = ['+', '-', '*', '/', '%'];

function addValue(value) {
  let lastChar = display.value.slice(-1);

  
  if (operators.includes(value)) {
    if (operators.includes(lastChar)) {
      display.value = display.value.slice(0, -1) + value;
      return;
    }
    
    if (display.value === "" && value !== '-') return;
  }
  if(value=='.'){
    let lastNumber=display.value.split(/[+\-*%/]/).pop();
if(lastNumber.includes('.')) 
 return;
if (lastNumber ==='')
  display.value += '0';
}
display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}


document.addEventListener("keydown", function (event) {
  let key = event.key;

  if ((key >= '0' && key <= '9') || key === '.') {
    addValue(key);
  } 
  else if (operators.includes(key)) {
    addValue(key);
  } 
  else if (key === 'Enter' || key === '=') {
    calculate();
  } 
  else if (key === 'Backspace') {
    deleteLast();
  } 
  else if (key === 'Escape') {
    clearDisplay();
  }
});

