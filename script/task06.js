const square = document.querySelector('canvas');
const offsetObj = document.querySelector('.exercice');
const labelPos = document.querySelectorAll('footer div')[1];
const whiteBox = document.querySelectorAll('footer div')[0];
square.style.position = "absolute";

function moveSquare(posX, posY) {

    square.style.top = posY + "px";
    square.style.left = posX + "px";
}

function Mousemove(e) {

    //Ne déplace que si la souris est enfoncée
    if (ismousedown) {

        //Offset du div dans lequel est le carré
        const rect = offsetObj.getBoundingClientRect();
        const squareRect = square.getBoundingClientRect();

        let posX = e.clientX;
        let posY = e.clientY;

        let relativX = squareRect.left - init_posX
        let relativY = squareRect.top - init_posY

        labelPos.innerHTML = 'New coordinates =&gt; {x:' + Math.floor(relativX) + ', y:' + Math.floor(relativY) + '}'


        moveSquare(posX - rect.left - 10, posY - rect.top - 10);

        

    }
}

//dimensions de la boite blanche :
console.log(whiteBox.clientHeight);

//Position initiale du carré noir.
init_posX = square.getBoundingClientRect().left;
init_posY = square.getBoundingClientRect().top;
//Dimensions du carre noir :
size = square.clientHeight / 2
console.log(size)

//bool pour savoir si la souris est enfoncée ou non.
let ismousedown = false;

//Events
window.addEventListener('mousemove', Mousemove)
square.addEventListener('mousedown', function () {
    ismousedown = true;
    square.style.boxShadow = "1px 2px 3px black";
})
window.addEventListener('mouseup', function () {
    ismousedown = false;
    square.style.boxShadow = "0px 0px 0px blue";
})




