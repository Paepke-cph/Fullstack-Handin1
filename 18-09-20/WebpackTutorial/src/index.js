import _ from 'lodash';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    
    element.innerHTML = _.join(['Hello','webpack'], ' ');
    element.classList.add('hello');

    button.innerHTML = 'Click Me and check the console';
    button.onclick = printMe;

    element.appendChild(button);

    return element;
}

document.body.appendChild(component());