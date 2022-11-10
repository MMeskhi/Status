function heroSlider() {
  const swiper = new Swiper(".hero_swiper", {
    navigation: {
      nextEl: ".hero_slider-next",
      prevEl: ".hero_slider-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });
}
function mainDoctorsSlider() {
  const swiper = new Swiper(".main_doctors-swiper", {
    breakpoints: {
      320: {
        slidesPerView: 1.4,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 12,
        grabCursor: true,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  });
}
heroSlider();
mainDoctorsSlider();
