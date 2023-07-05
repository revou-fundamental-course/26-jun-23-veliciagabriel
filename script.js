var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imageSlide = document.getElementsByClassName("imageSlideShow");
    if (n > imageSlide.length) slideIndex = 1;
    else if (n < 1) slideIndex = imageSlide.length;

    for (i = 0; i < imageSlide.length; i++) {
        imageSlide[i].style.display = "none";
    }

    imageSlide[slideIndex = 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 5000)