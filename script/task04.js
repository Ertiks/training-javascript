
const body = document.querySelector('body');
const listButtons = document.querySelectorAll('button');
const selector = document.querySelector('select');

let FS = 1.0;
listButtons[0].addEventListener('click', function () { FS += 0.1; body.style.fontSize = FS + "em" });
listButtons[1].addEventListener('click', function () { FS -= 0.1; body.style.fontSize = FS + "em" });
selector.addEventListener('click', function () { body.style.backgroundColor = selector.value });

