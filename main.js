const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const close = document.getElementById('close');
const myform = document.getElementById('myform');


menu.addEventListener('click', () =>{
    nav.style.display = 'flex';
    close.style.display = 'inline-block';
    menu.style.display = 'none';
});

close.addEventListener('click', () =>{
    menu.style.display = 'inline-block';
    nav.style.display = 'none';
    close.style.display = 'none';
});

// function to send user Input to P.R.O in whatsApp

