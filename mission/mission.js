let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let h1 = document.querySelector('h1');
let body = document.querySelector('body');
let para = document.querySelector('p');
let li = document.querySelectorAll('li')
let italic = document.querySelector('i');
let h2 = document.querySelector('h2');
selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        body.classList.toggle = 'dark';
        h1.style.color = 'white';
        para.style.color = 'white';
        italic.style.color= 'white';
        h2.style.color = 'lightblue';
        for(var i = 0; i<li.length; i++){
            li[i].style.color = 'white';
        }
        body.style.backgroundColor = '#242124';
        logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png');
    } else {
        h1.style.color = 'black';
        para.style.color = 'black';
        italic.style.color= 'black';
        h2.style.color = '#006eb7';
        for(var i = 0; i<li.length; i++){
            li[i].style.color = 'black';
        }
        body.style.backgroundColor = 'white';
        logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp')
    }
}           
                    