button = document.querySelector('button');
input = document.querySelector('input');
body = document.querySelector('body');

button.addEventListener('click', function () {

    str = input.value;
    let div2 = document.createElement('div');
    body.appendChild(div2);
    div2.innerHTML = str;

});