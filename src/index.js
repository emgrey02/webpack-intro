import myName from './myName';
import './style.css';
import Charlie from './charlie.jpg';

function component() {
  const element = document.createElement('div');

  element.innerHTML = myName('Emma');
  element.classList.add('hello');

  const charlie = new Image();
  charlie.src = Charlie;

  element.appendChild(charlie);

  return element;
}

document.body.appendChild(component());
