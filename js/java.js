// opnen and close navbar in responsive media 910px to 280px.
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
};
// opnen and close navbar in responsive media 910px to 280px.

// slider one 3image with onclick on word.
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(image) {
  showSlides(slideIndex += image);
}

function currentSlide(image) {
  showSlides(slideIndex = image);
}
function showSlides(image) {
  let aMovement;
  let slides = document.getElementsByClassName("Slider1");
  let dots = document.getElementsByClassName("button1");
  if (image > slides.length) {slideIndex = 1}    
  if (image < 1) {slideIndex = slides.length}
  for (aMovement = 0; aMovement < slides.length; aMovement++) {
    slides[aMovement].style.display = "none";  
  }
  for (aMovement = 0; aMovement < dots.length; aMovement++) {
    dots[aMovement].className = dots[aMovement].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// slider one 3image with onclick on word.

// Install the header when descending.
let lastKnownScrollPosition = "";
let ticking = false;
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function doSomething(scrollPos) {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
// Install the header when descending.

//Climbing button to header.
var mybutton = document.getElementById("myBtn");
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
            
        } else {
            mybutton.style.display = "none";
        }
        }
        function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        mybutton.style.transition = '3s';
}
//Climbing button to header.

// slider one 6image with onclick on icon and point.
let imageClients = 1;
showSlide(imageClients);

function plusClients(images) {
  showSlide(imageClients += images);
}

function currentClients(images) {
  showSlide(imageClients = images);
}
function showSlide(images) {
  let client = document.getElementsByClassName("clientsaysaboutus");
  let click = document.getElementsByClassName("clicks");
  if (images > client.length) {imageClients = 1}    
  if (images < 1) {imageClients = client.length}
  for (Movement = 0; Movement < client.length; Movement++) {
    client[Movement].style.display = "none";  
  }
  for (Movement = 0; Movement < click.length; Movement++) {
    click[Movement].className = click[Movement].className.replace(" active", "");
  }
  client[imageClients-1].style.display = "block";  
  click[imageClients-1].className += " active";
}







  

  