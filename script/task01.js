
let i = 0;
const object = document.querySelector('footer > div');
object.innerHTML = i;
object.onclick = function () {
    i++;
    object.innerHTML = i;
};