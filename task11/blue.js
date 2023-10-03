listPar = document.querySelectorAll('p');

//Fonctions d'events
function OnParEnter(e) {
    e.target.style.backgroundColor = 'cyan';
}
function OnParLeave(e) {
    e.target.style.backgroundColor = '';
}

//Highlighted n'existe pas ?
function SetHighlight(e) {

    if (e.target.getAttribute('class') === 'highlighted') {
        console.log("pouet")
        e.target.classList.remove("highlighted");
    }
    else {
        e.target.setAttribute("class", "highlighted");
    }
}


//Event
for (let i = 0; i < listPar.length; i++) {
    listPar[i].addEventListener('mouseenter', OnParEnter);
    listPar[i].addEventListener('mouseleave', OnParLeave);
    listPar[i].addEventListener('click', SetHighlight);
}