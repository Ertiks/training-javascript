listLink = document.querySelectorAll('a');

let linkblank = [];

for (let i = 0; i < listLink.length; i++) {

    let str = listLink[i].getAttribute("target");

    if (str != null && str.includes("_blank") === true) {
        linkblank.push(listLink[i]);
        listLink[i].style.opacity = '0.5';
    }
}
