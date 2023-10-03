const canvas = document.querySelector('canvas');
const listbuttons = document.querySelectorAll('footer button');

console.log(listbuttons);

let audio = new Audio("https://raw.githubusercontent.com/rafaelreis-hotmart/Audio-Sample-files/master/sample.mp3")

console.log(canvas);


function onMute() {
    audio.muted = !audio.muted;
}

if (canvas.getContext) {
    const ctx = canvas.getContext("2d")

    ctx.beginPath();
    ctx.moveTo(6, 6);
    ctx.lineTo(14, 10);
    ctx.lineTo(6, 14);
    ctx.closePath();

    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";
    ctx.stroke()

    ctx.fillStyle = "white";
    ctx.fill();

//Event clic canvas :

    canvas.addEventListener('click', function () { audio.play(); });

//Buttons :

    listbuttons[0].addEventListener('click', function () { audio.pause(); });

    listbuttons[1].addEventListener('click', function () { audio.pause(); audio.currentTime = 0; });

    listbuttons[2].addEventListener('click', onMute);

}