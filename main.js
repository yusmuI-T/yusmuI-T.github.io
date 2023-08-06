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

myform.addEventListener('submit',(event)=>{
    event.preventDefault();
   
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const subject = document.getElementById("subject").value;
   const message = document.getElementById("message").value;

    const PhoneNumber = '2347045777804';
    const encodedMessage = 
    encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMessage: " + message);

     const whatsAppLink = "https://wa.me" + PhoneNumber + "?text=" + encodedMessage;
     window.open(whatsAppLink, "_blank");

        
});