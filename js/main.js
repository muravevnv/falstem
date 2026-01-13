document.addEventListener("DOMContentLoaded", () => {
  function bodyLock() {
    const body = document.querySelector("body");
    if (body.classList.contains("lock")) {
      body.classList.remove("lock");
    } else {
      body.classList.add("lock");
    }
  }

  function bodyUnlock() {
    const body = document.querySelector("body");
    body.classList.remove("lock");
  }

  const menu = document.querySelector('[data-menu="menu"]');
  const menuBtn = document.querySelector('[data-menu="btn"]');

  if (menu && menuBtn) {
    menuBtn.addEventListener("click", () => {
      if (menu.classList.contains("is-open")) {
        bodyUnlock();
        menuBtn.classList.remove("is-active");
        menu.classList.remove("is-open");
      } else {
        bodyLock();
        menuBtn.classList.add("is-active");
        menu.classList.add("is-open");
      }
    });
  }

  if (document.querySelector('[data-slider="hero"]')) {
    const slider = document.querySelector('[data-slider="hero"]');
    const thumbs = document.querySelector('[data-thumbs="hero"]');

    const swiperThumbs = new Swiper(thumbs, {
      slidesPerView: 3,
    });

    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      thumbs: {
        swiper: swiperThumbs,
      },
    });
  }

  if (document.querySelector('[data-slider="documents"]')) {
    const slider = document.querySelector('[data-slider="documents"]');
    const pagination = document.querySelector(
      '[data-slider-pagination="documents"]'
    );

    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: pagination,
        clickable: true,
      },
      breakpoints: {
        560: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  if (document.querySelector('[data-slider="tech-album"]')) {
    const slider = document.querySelector('[data-slider="tech-album"]');
    const pagination = document.querySelector(
      '[data-slider-pagination="tech-album"]'
    );

    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: pagination,
        clickable: true,
      },
      breakpoints: {
        560: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: "auto",
          spaceBetween: 0,
          allowTouchMove: false,
        },
      },
    });
  }

  if (document.querySelector('[data-slider="brands"]')) {
    const slider = document.querySelector('[data-slider="brands"]');
    const pagination = document.querySelector(
      '[data-slider-pagination="brands"]'
    );

    const swiper = new Swiper(slider, {
      slidesPerView: 2,
      spaceBetween: 8,
      loop: true,
      speed: 2500,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      pagination: {
        el: pagination,
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  if (document.querySelector('[data-slider="other-news"]')) {
    const slider = document.querySelector('[data-slider="other-news"]');
    const pagination = document.querySelector(
      '[data-slider-pagination="other-news"]'
    );
    const btnPrev = document.querySelector('[data-slider-prev="other-news"]');
    const btnNext = document.querySelector('[data-slider-next="other-news"]');

    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
      pagination: {
        el: pagination,
        clickable: true,
      },
      breakpoints: {
        560: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }

  if (document.querySelector('[data-slider="other-products"]')) {
    const slider = document.querySelector('[data-slider="other-products"]');
    const pagination = document.querySelector(
      '[data-slider-pagination="other-products"]'
    );
    const btnPrev = document.querySelector(
      '[data-slider-prev="other-products"]'
    );
    const btnNext = document.querySelector(
      '[data-slider-next="other-products"]'
    );

    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
      pagination: {
        el: pagination,
        clickable: true,
      },
      breakpoints: {
        560: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }

  if (document.querySelector('[data-slider="product"]')) {
    const slider = document.querySelector('[data-slider="product"]');
    const thumbs = document.querySelector('[data-thumbs="product"]');
    const pagination = document.querySelector(
      '[data-slider-pagination="product"]'
    );
    const btnThumbsPrev = document.querySelector(
      '[data-thumbs-prev="product"]'
    );
    const btnThumbsNext = document.querySelector(
      '[data-thumbs-next="product"]'
    );

    const thumbsSwiper = new Swiper(thumbs, {
      slidesPerView: 3,
      spaceBetween: 20,
      direction: "vertical",
      navigation: {
        nextEl: btnThumbsNext,
        prevEl: btnThumbsPrev,
      },
      breakpoints: {
        1440: {
          slidesPerView: 4,
        },
      },
    });

    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      thumbs: {
        swiper: thumbsSwiper,
      },
      pagination: {
        el: pagination,
        clickable: true,
      },
    });
  }

  $("[data-spoller-head]").on("click", function () {
    const spoller = $(this).closest("[data-spoller]");
    const body = spoller.find("[data-spoller-body]");
    if (body.is(":visible")) {
      body.slideUp(300);
      spoller.removeClass("is-open");
    } else {
      body.slideDown(300);
      spoller.addClass("is-open");
    }
  });

  const STORAGE_KEY = "cookies_accepted";

  if (!localStorage.getItem(STORAGE_KEY)) {

    setTimeout(function () {
      $('[data-coockies="panel"]').addClass("is-show");
    }, 1000);
  }

  $('[data-coockies="btn"]').on("click", function () {
    const coockiesPanel = $(this).closest('[data-coockies="panel"]');

    coockiesPanel.removeClass("is-show").addClass("hide");

    localStorage.setItem(STORAGE_KEY, "true");

    setTimeout(function () {
      coockiesPanel.remove();
    }, 300);
  });

  if (document.querySelector("#map")) {
    ymaps.ready(function () {
      const map = new ymaps.Map("map", {
        center: [53.260529, 36.541292],
        zoom: 16,
      });

      const customPlacemark = new ymaps.Placemark(
        [53.262929, 36.543592],
        {
          balloonContent: "Фалстем",
          iconCaption: "",
        },
        {
          
          iconLayout: "default#image",
          iconImageHref: "../images/icons/map-pin.svg",
          iconImageSize: [100, 100],
          iconImageOffset: [-150, 150],
        }
      );
      map.geoObjects.add(customPlacemark);
    });
  }
});
