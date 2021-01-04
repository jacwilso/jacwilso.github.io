var modal = null;

function openModal(element) {
    modal.style.display = "block";
    var descriptionHTML = document.getElementById("modal-description");
    descriptionHTML.innerHTML = "";
    var description = element.dataset.description;
    if (description) {
        descriptionHTML.innerHTML = description;
    }
    
    var gridHTML = document.getElementById("modal-grid");
    gridHTML.innerHTML = element.dataset.html;
}

function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal()
    }
}

var slideIndex = [];
document.addEventListener("DOMContentLoaded", function(event) {
    modal = document.getElementById("modal-images");
    var slideshows = document.getElementsByClassName("slideshow");
    for (shows = 0; shows < slideshows.length; shows++) {
        slideIndex.push(1);
        showSlides(1, shows);
    }
});

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    var slideshow = document.getElementsByClassName("slideshow")[no];
    var slides = slideshow.getElementsByClassName("slide-container");
    var dots = slideshow.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
  }
  slides[slideIndex[no]-1].style.display = "flex";
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex[no]-1].className += " active";
}
