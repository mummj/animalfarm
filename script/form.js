'use strict'

const form = document.getElementsByTagName('*')[0];
const label = document.createElement('label');
const input = document.createElement('input');
const submit = document.createElement('input');
const fieldset = document.getElementById('first');
const content = document.createElement('textarea');

label.textContent = 'Date:';
input.type = 'text';
input.id = 'date';
input.name = 'input';
content.id = 'info';
content.name = 'content';
content.rows = '5';
content.cols = '30';
submit.type = 'submit';

fieldset.appendChild(label);
fieldset.appendChild(input);
fieldset.appendChild(content);
fieldset.appendChild(submit);

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const input = event.target.input.value;
    const content = event.target.content.value;

    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    h1.textContent = input;
    p.textContent = content;

    const formContent = document.getElementById('render');

    formContent.appendChild(h1);
    formContent.appendChild(p);
}
