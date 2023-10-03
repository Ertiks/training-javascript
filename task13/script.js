const body = document.querySelector('body');
//Premier Form
const input = document.querySelector('input');
const buttonSubmit = document.querySelector('button');
const menu1 = document.querySelector('select');

//Second Form
const buttonSearch = document.querySelectorAll('button')[1];
const buttonReset = document.querySelectorAll('button')[2];
const menu2 = document.querySelectorAll('select')[1];

console.log(buttonSearch);

//Form1
function addElement() {
    let listElement = document.createElement('li');
    bulletList.appendChild(listElement);
    listElement.innerHTML = input.value;

    listElement.setAttribute('class', menu1.value);
}


//Form2
function HideElements() {
    listElement = bulletList.querySelectorAll('li');

    for (let i = 0; i < listElement.length; i++) {
        if (listElement[i].getAttribute('class') == menu2.value) {
            listElement[i].hidden = false;
        }
        else { listElement[i].hidden = true; }
    }
}
function ResetElements() {
    listElement = bulletList.querySelectorAll('li');

    for (let i = 0; i < listElement.length; i++) {
        listElement[i].hidden = false;

    }
}


let bulletList = document.createElement('ul');
body.appendChild(bulletList);

buttonSubmit.addEventListener('click', function () {

    addElement();
    input.value = "";

});

buttonSearch.addEventListener('click', function () {
    HideElements();
})

buttonReset.addEventListener('click', function () {
    ResetElements();
});
