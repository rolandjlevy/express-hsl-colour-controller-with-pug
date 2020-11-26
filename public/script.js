const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const getColour = (h, s, l) => new w3color(`hsl(${h}, ${s}%), ${l}%`);

function getVar(selector, varName) {
  return getComputedStyle($(selector)).getPropertyValue(varName).trim();
}

function setVar(selector, varName, value) {
  $(selector).style.setProperty(varName, value);
}

function updateLabel(name, value) {
  $(`input[name='${name}'] + label`).textContent = value;
}

function updateDisplay() {
  const hue = getVar('html', '--h');
  const sat = getVar('html', '--s');
  const lit = getVar('html', '--l');
  $('.block > span').innerHTML = getColourValues(hue, sat, lit);
  const displayColour = (lit >= 55) ? '#000' : '#fff';
  setVar('html', '--display-colour', displayColour);
}

function getColourValues(hue, sat, lit) {
  let col = getColour(hue, sat, lit);
  const hsl = col.toHslString();
  const hex = col.toHexString();
  const rgb = col.toRgbString();
  return `${hsl}<br>${hex}<br>${rgb}`;
}

$$('.slider').forEach(item => {
  item.addEventListener('input', (e) => {
    const { name, value } = e.target;
    setVar('html', name, value);
    updateLabel(name, value);
    updateDisplay();
  });
});

updateDisplay();