function heroSlider() {
  const swiper = new Swiper(".hero_swiper", {
    navigation: {
      nextEl: ".hero_slider-next",
      prevEl: ".hero_slider-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 10000,
    },
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

//Language switcher
const langSwitcher = document.querySelector(".lang");
const langMain = document.querySelector(".lang-main");
const langSwitch = document.querySelector(".lang-drp");
const langSwitcherM = document.querySelector(".navbar-mobile .lang");
const langMainM = document.querySelector(".navbar-mobile .lang-main");
const langSwitchM = document.querySelector(".navbar-mobile .lang-drp");

function openLangSwitcher() {
  langSwitch.classList.toggle("lang-hidden");
  langMain.classList.toggle("lang-main-active");
}

function openLangSwitcherM() {
  langSwitchM.classList.toggle("lang-hidden");
  langMainM.classList.toggle("lang-main-active");
}

langMain.addEventListener("click", openLangSwitcher);
langMainM.addEventListener("click", openLangSwitcherM);

//Click outside of lang switcher to close
document.addEventListener("click", (event) => {
  const isClickInside = langSwitcher.contains(event.target);
  const isClickInsideM = langSwitcherM.contains(event.target);

  if (!isClickInside) {
    isLangSwitcherOpen();
  }
  if (!isClickInsideM) {
    isLangSwitcherOpenM();
  }
});

function isLangSwitcherOpen() {
  if (langSwitch.classList.contains("lang-hidden")) {
    openLangSwitcher();
  }
  return;
}
function isLangSwitcherOpenM() {
  if (langSwitchM.classList.contains("lang-hidden")) {
    openLangSwitcherM();
  }
  return;
}

//Mobile sidebar
const mobileHamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".navbar-mobile");
const noScroll = document.querySelector("body");
const sidebarMenu = document.querySelector(".navbar-mobile-cont");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

function openSidebar() {
  sidebar.classList.toggle("navbar-mobile-active");
  noScroll.classList.toggle("no-scroll");
  sidebarMenu.classList.toggle("navbar-mobile-cont-active");
  menuOpen.classList.toggle("switch-btn");
  menuClose.classList.toggle("switch-btn");
}

mobileHamburger.addEventListener("click", openSidebar);
