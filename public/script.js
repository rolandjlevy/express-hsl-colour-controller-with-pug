const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function getVar(selector, varName) {
  return getComputedStyle($(selector)).getPropertyValue(varName).trim();
}

function setVar(selector, varName, value) {
  $(selector).style.setProperty(varName, value);
}

function updateDisplay() {
  const hue = getVar('html', '--h');
  const sat = getVar('html', '--s');
  const lit = getVar('html', '--l');
  $('.block > span').textContent = `hsl(${hue}, ${sat}%, ${lit}%)`;
  const displayColor = (lit >= 60) ? '#000' : '#fff';
  setVar('html', '--display-color', displayColor);
}

function updateLabel(name, value) {
  $(`input[name='${name}'] + label`).textContent = value;
}

$$('.slider').forEach(item => {
  item.addEventListener('input', (e) => {
    const { name, value } = e.target;
    setVar('html', name, value);
    updateDisplay();
    updateLabel(name, value)
  });
});

updateDisplay();
