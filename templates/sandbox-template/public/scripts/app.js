// Use the values from the HTML template
const inputPlay  = document.querySelector('input');
const paraLink   = document.querySelector('#cloud-hero-link');
const paraCode   = document.querySelector('#cloud-hero-code');

// Link + Access Code
//const gameLink = "https://google.qwiklabs.com/games/958";
//const gameCode = "4d-hsbc-after";

// Remove any existing content
//paraLink.textContent = '';
//paraCode.textContent = '';

// Watch for submit and update the form
inputPlay.addEventListener('click', (event) => {
//  event.preventDefault();

//  paraLink.textContent = "Game Link: " + gameLink; 
//  paraCode.textContent = "Access code: " + gameCode; 


  let x = document.getElementById("hero-header");

//  if (x.style.display === "none") {
    x.style.display = "block";
//  } 
//  else {
//    x.style.display = "none";
//  }
})
