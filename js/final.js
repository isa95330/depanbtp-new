function toggleMenu () {  
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  
  burger.addEventListener('click', (e) => {    
    navbar.classList.toggle('show-nav');
  });    
  // bonus
  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    }); 
  })
   
}
toggleMenu();

// back to top button
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// modale pour les travaux publics et les travaux particuliers
document.getElementById('btnTravauxPublics').addEventListener('click', function(e) {
  e.preventDefault();

  var modal = document.getElementById('modal');
  var modalBody = document.getElementById('modal-body');
  var closeButton = document.querySelector('.close-button');

  fetch('./travaux_public.html')
  .then(response => response.text())
  .then(data => {
      modalBody.innerHTML = data;
      modal.style.display = "block";
  });

  closeButton.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});