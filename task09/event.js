firstButton = document.querySelector('button');
para = document.querySelectorAll('p');

console.log(firstButton);



firstButton.addEventListener('click', function () {
    for (let i = 0; i < para.length; i++) {
        para[i].hidden = !para[i].hidden;
    }
});
