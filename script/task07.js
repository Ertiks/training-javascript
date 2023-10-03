let link = document.querySelector('footer a');
const footer = document.querySelector('footer');
const div = document.querySelector('footer > div')
function extractValue() {

    l1 = document.cookie.split("=");
    return l1[1];

}

function activebox(activeBool) {

    if (activeBool) {
        div2.hidden = false;
        div.hidden = true;
    }
    else {
        div2.hidden = true;
        div.hidden = false;
    }

}


isSecondBoxActive = false;

//Calcul 1j de cookie
const d = new Date();
d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));

//whitebox N2
let div2 = document.createElement('div');
footer.appendChild(div2);
div2.innerHTML = '<button type="button">Delete Cookies</button>';
button = div2.querySelector('button');
div2.hidden = true;

//whitebox N1
div.innerHTML;


link.addEventListener('click', function () {

    document.cookie = 'Simple-cookie = true; expires=' + d.toUTCString() + '; path=/;';
    if (extractValue() == "true") {
        activebox(true);
    }

})

button.addEventListener('click', function () {


    document.cookie = "Simple-cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    activebox(false);


})