var modal = null;

function openModal(element) {
    modal.style.display = "block";
    // Reset modal
    var imgsHTML = modal.getElementsByTagName("img");
    var descriptionHTML = document.getElementById("modal-description");
    descriptionHTML.innerHTML = "";
    for (var i=0; i<9; ++i) {
        imgsHTML[i].src = "";
    }
    // Set modal
    var description = element.dataset.description;
    if (description) {
        descriptionHTML.innerHTML = description;
    }
    var images = element.dataset.images.replaceAll('\n','').replaceAll('\t','').split(',');
    for (var i=0; i<images.length; ++i) {
        imgsHTML[3*(i%3) + Math.floor(i/3)].src = images[i];
    }
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

document.addEventListener("DOMContentLoaded", function(event) {
    modal = document.getElementById("modal-images");
});