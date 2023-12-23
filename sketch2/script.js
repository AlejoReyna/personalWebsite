document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".images-container");
    const images = document.querySelectorAll(".slider-img-container");

    let index = 0;

    function nextSlide() {
        index = (index + 1) % images.length;
        updateSlider();
    }

    function prevSlide() {
        index = (index - 1 + images.length) % images.length;
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -index * 100 + "%";
        slider.style.transform = "translateX(" + translateValue + ")";
        slider.classList.add("transition");
    }

    document.getElementById("nextBtn").addEventListener("click", function() {
        slider.classList.remove("transition");
        nextSlide();
    });

    document.getElementById("prevBtn").addEventListener("click", function(){
        slider.classList.remove("transition");
        prevSlide();
    });
});