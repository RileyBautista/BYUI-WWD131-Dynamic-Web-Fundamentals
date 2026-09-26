const title = document.querySelector('h1');

console.log(title);

title.textContent = 'Web Page Components';

let topics = document.querySelector('#topics');

//topics.style.color = 'red';

topics.style.color = 'purple';

let list = document.querySelector('.list');

list.style.border = '3px solid black';

let para = document.querySelector('p');

//para.style.backgroundColor = 'lightblue';

para.classList.add('background');

//document.querySelector('body').classList.add('background');

const image = document.querySelector('img');
image.setAttribute('src', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.1training.org%2Fwp-content%2Fuploads%2F2017%2F10%2F6.png&f=1&nofb=1&ipt=c9f848ffc972d512b638ed33b915df10ca1c2151953e35bbce1f47950e087358');


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color= 'red';
})

                