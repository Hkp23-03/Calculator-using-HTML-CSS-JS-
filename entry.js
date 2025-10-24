let display = document.querySelector('input[name="display"]');

document.addEventListener("keydown", function(event) {
  let key = event.key;

  if((key >= '0' && key <= '9') || key == '+' || key == '-' || key == '*' || key == '/' || key == '.') {
    display.value += key;
  }
 else if(key == 'Enter'|| key == '=') {
    display.value = eval(display.value);
  }

  else if(key == 'Backspace') {
    display.value = display.value.slice(0, -1);
  }
  else if(key == 'Escape') {
    display.value = "";
  }
});