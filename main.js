var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
    displaySlides(currentIndex += num);
}

function displaySlides(num) {
    var item;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (item = 0; item < slides.length; item++) {
        slides[item].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}




