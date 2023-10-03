const input = document.querySelector('input');
const button = document.querySelector('button');
const menu = document.querySelector('select');
const body = document.querySelector('body');


function addElement() {
    let listElement = document.createElement('li');
    bulletList.appendChild(listElement);
    listElement.innerHTML = input.value;

    listElement.setAttribute('class', menu.value);
}

button.addEventListener('click', function () {


    addElement();
    input.value = "";

});


let bulletList = document.createElement('ul');
body.appendChild(bulletList);