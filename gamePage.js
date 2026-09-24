console.log("conected")

var slideIndex = 0
var slides = document.getElementsByClassName("slide")
showSlide(0)

function showSlide(newIndex) {
    slideIndex = (newIndex + slides.length) % slides.length;
    Array.from(slides).forEach(element => {
        element.style.display = "none"
    });
    slides[slideIndex].style.display = "block"
}

function showSlideWithAnimation(newIndex) {
    Array.from(slides).forEach(element => {
        element.style.display = "none"
    });
    animateSlideOut(slides[slideIndex])
    slideIndex = (newIndex + slides.length) % slides.length;
    animateSlideIn(slides[slideIndex])
}
function changeSlide(by) {
    showSlideWithAnimation(slideIndex + by)
}

function animateSlideIn(slide) {
    slide.style.display = 'block'
    slide.animate(
        [
            { transform: 'translateX(-500px)' },
            { transform: 'translateX(0px)' }
        ],
        { duration: 400 })
}

function animateSlideOut(slide) {
    slide.style.display = 'block'
    var thisAnimation = slide.animate(
        [
            { transform: 'translateX(0)' },
            { transform: 'translateX(500px)' }
        ],
        { duration: 400 }
    )
    thisAnimation.finished.then(function () { slide.style.display = 'none' })
}
