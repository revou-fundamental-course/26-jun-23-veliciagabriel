function showSlides() {
    let i;
    let slides = document.getElementsByClassName("imageSlideShow");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < imageSlideShow.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/* var slideIndex = 1
setInterval(function() {
    plusDiv[1]
}, 2000)

function plusDiv (index) {
    showImage(slideIndex += index)
}

function showImage(index) {
    console.log(index)
    const imgList = document.getElementsByClassName("imageSlideShow")
    if (index > imgList.length) {slideIndex = 1}
    if (index < 1) {slideIndex = imgList.length}
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"
    }
    imgList[slideIndex -1].style.display = "block"
} */

 // JavaScript error dan ga work, akan dicari tau lagi problemnya