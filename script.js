(() => {
  function initHeroCarousel() {
    const carousel = document.querySelector(".hero-carousel");

    if (!carousel || carousel.dataset.initialized === "true") {
      return;
    }

    const slides = Array.from(carousel.querySelectorAll(".hero-slide"));
    const previousButton = carousel.querySelector(".hero-prev");
    const nextButton = carousel.querySelector(".hero-next");

    if (!slides.length || !previousButton || !nextButton) {
      return;
    }

    carousel.dataset.initialized = "true";

    let currentSlide = slides.findIndex((slide) =>
      slide.classList.contains("is-active")
    );

    if (currentSlide === -1) {
      currentSlide = 0;
      slides[0].classList.add("is-active");
    }

    function showSlide(index) {
      slides[currentSlide].classList.remove("is-active");

      currentSlide = (index + slides.length) % slides.length;

      slides[currentSlide].classList.add("is-active");
    }

    previousButton.addEventListener("click", () => {
      showSlide(currentSlide - 1);
    });

    nextButton.addEventListener("click", () => {
      showSlide(currentSlide + 1);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        showSlide(currentSlide - 1);
      }

      if (event.key === "ArrowRight") {
        showSlide(currentSlide + 1);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeroCarousel);
  } else {
    initHeroCarousel();
  }
})();