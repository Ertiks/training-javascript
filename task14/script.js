const body = document.querySelector('body');
//Premier Form
const input = document.querySelector('input');
const buttonSubmit = document.querySelector('button');
const menu1 = document.querySelector('select');

//Second Form
const buttonSearch = document.querySelectorAll('button')[1];
const buttonReset = document.querySelectorAll('button')[2];
const menu2 = document.querySelectorAll('select')[1];
const inputSearch = document.querySelectorAll('input')[1];



//Form1
function addElement() {
    let listElement = document.createElement('li');
    bulletList.appendChild(listElement);
    listElement.innerHTML = input.value;

    listElement.setAttribute('class', menu1.value);
}


//Form2
function HideElements() {
    listElement = bulletList.querySelectorAll('li');

    let str = inputSearch.value;
    let search;

    for (let i = 0; i < listElement.length; i++) {

        search = true;

        if (menu2.value != 'all' && listElement[i].getAttribute('class') != menu2.value) {
            search = false;
        }

        else if (str != "" && listElement[i].innerHTML.includes(str) == false) {
            search = false
        }






        if (search) { listElement[i].hidden = false; }
        else { listElement[i].hidden = true; }

        /*
        if (listElement[i].getAttribute('class') == menu2.value) {


            if (str == "" || listElement[i].innerHTML.includes(str) == true) {
                listElement[i].hidden = false;
            }
        }

        else { listElement[i].hidden = true; }*/
    }
}

function SearchStr(listElements) {
    str = inputSearch.value;
    l = [];


    
    if (str != "") {
        for (let i = 0; i < listElements.length; i++)

            if (listElements[i].innerHTML.includes(str) == true) { l.push(listElements[i]) }

        return l;
    }
    return listElements;
}

function ResetElements() {
    listElement = bulletList.querySelectorAll('li');

    for (let i = 0; i < listElement.length; i++) {
        listElement[i].hidden = false;

    }
}




let bulletList = document.createElement('ul');
body.appendChild(bulletList);




//EVENT :
buttonSubmit.addEventListener('click', function () {

    addElement();
    input.value = "";

});

buttonSearch.addEventListener('click', function () {
    HideElements();
})

buttonReset.addEventListener('click', function () {
    ResetElements();
});
