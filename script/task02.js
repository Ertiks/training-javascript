let i = 0;
const object = document.querySelector('footer > div');
object.onclick = function () {

    let name = "";
    let secondName = "";

    while (name == "") {
        name = window.prompt("What's your name ?");
    }

    if (window.confirm("Are you sure that " + name + " is your name ?")) { 
        window.alert("Hello " + name);
        object.innerHTML = "Hello " + name;
    }

    

};