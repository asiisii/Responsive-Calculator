const clear = document.getElementById('clear');
const solve = document.getElementById('solve');
const view = document.getElementById('view');
const buttons = document.querySelectorAll('.btn');

clear.addEventListener('click', clearResult);
solve.addEventListener('click', solveProblem);
buttons.forEach(function(button) {
  button.addEventListener('click', displayInput);
});

function displayInput(event) {
  event.preventDefault();
  let getValue = event.target.dataset.num;
  view.value += getValue;
}

function solveProblem() {
  if (view.value === '') {
    return;
  }

  view.value = eval(view.value);
}

function clearResult() {
  view.value = '';
}
