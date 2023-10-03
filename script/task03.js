const object = document.querySelector('footer > div');


let lastLetters = "";
function inputKeyboard(e) {

    caracter = e.key;

    if (caracter.length === 1) {
        lastLetters += (caracter); 
    }

    if (lastLetters.length > 42) {
        lastLetters = lastLetters.substring(1);
    }

    object.innerHTML = lastLetters;
}

document.addEventListener('keydown', inputKeyboard );