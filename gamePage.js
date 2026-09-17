console.log("conected")

var slideIndex =0
var slides = document.getElementsByClassName("slide")
showSlide(0)

function showSlide( newIndex ) {
slideIndex = newIndex;
Array.from(slides).forEach(element => {
    element.style.display = "none"
});
slides[slideIndex].style.display = "block"
}