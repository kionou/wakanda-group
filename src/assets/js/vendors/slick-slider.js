!(function () {
  var s = document.querySelector(".category-slider"),
    s =
      (s &&
        e(s, {
          infinite: !0,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !1,
          arrows: !0,
          prevArrow:
            '<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',
          nextArrow:
            '<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',
          responsive: [
            {
              breakpoint: 1400,
              settings: { slidesToShow: 4, slidesToScroll: 4 },
            },
            {
              breakpoint: 820,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
          ],
        }),
        document.querySelector(".team-slider")),
    s =
      (s &&
        e(s, {
          infinite: !0,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !1,
          arrows: !0,
          prevArrow:
            '<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',
          nextArrow:
            '<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',
          responsive: [
            {
              breakpoint: 1024,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 820,
              settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ],
        }),
        document.querySelectorAll(".hero-slider"));
        
        
  function e(s, e) {
    window.jQuery && jQuery.fn.slick ? $(s).slick(e) : new Slick(s, e);
  }
  s &&
    e(s, {
      infinite: !0,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: !0,
      dots: !0,
      arrows: !1,
    });
  (s = document.querySelectorAll(".slider-8-columns")),
    s.length &&
    s.forEach(function (s) {
      s = s.id;
      e("#" + s, {
        infinite: !0,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: !0,
        dots: !1,
        arrows: !0,
        speed: 1e3,
        loop: !0,
        adaptiveHeight: !0,
        responsive: [
          {
            breakpoint: 1025,
            settings: { slidesToShow: 4, slidesToScroll: 1 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 3, slidesToScroll: 1 },
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 2, slidesToScroll: 1 },
          },
        ],
        prevArrow:
          '<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',
        nextArrow:
          '<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',
        appendArrows: "#" + s + "-arrows",
      });
    }),


    (s = document.querySelectorAll(".product-slider-second")),
    s.length &&
    s.forEach(function (s) {
      s = s.id;
      e("#" + s, {
        infinite: !0,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: !0,
        dots: !1,
        arrows: !0,
        speed: 1e3,
        loop: !0,
        adaptiveHeight: !0,
        responsive: [
          {
            breakpoint: 1400,
            settings: { slidesToShow: 5, slidesToScroll: 5 },
          },
          {
            breakpoint: 990,
            settings: { slidesToShow: 4, slidesToScroll: 1 },
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
          },
        ],
        prevArrow:
          '<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',
        nextArrow:
          '<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',
        appendArrows: "#" + s + "-arrows",
      });
    }),
    (s = document.querySelector(".slider-for")),
    s &&
    $(s).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !1,
      fade: !0,
      asNavFor: ".slider-nav",
    }),
    (s = document.querySelector(".slider-nav")),
    s &&
    $(s).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: !1,
      centerMode: !1,
      focusOnSelect: !0,
      prevArrow:
        '<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',
      nextArrow:
        '<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',
    }),
    (s = document.querySelector(".product-slider-four-columns")),

    s &&
    e(s, {
      infinite: !0,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: !0,
      dots: !1,
      arrows: !0,
      prevArrow:
        '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
      nextArrow:
        '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
      responsive: [
        {
          breakpoint: 1400,
          settings: { slidesToShow: 7, slidesToScroll: 7 },
        },
        {
          breakpoint: 1200,
          settings: { slidesToShow: 6, slidesToScroll: 1 },
        },
        { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      ],
    }),

    (s = document.querySelector(".sur_commande")),

    s &&
    e(s, {
      infinite: !0,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: !0,
      dots: !1,
      arrows: 0,

      responsive: [
        {
          breakpoint: 1400,
          settings: { slidesToShow: 7, slidesToScroll: 7 },
        },
        {
          breakpoint: 1200,
          settings: { slidesToShow: 5, slidesToScroll: 1 },
        },
        { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      ],
    }),

    (s = document.querySelector(".vus_recemment")),

    s &&
    e(s, {
      infinite: !0,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: !0,
      dots: !1,
      arrows: 0,

      responsive: [
        {
          breakpoint: 1400,
          settings: { slidesToShow: 7, slidesToScroll: 7 },
        },
        {
          breakpoint: 1200,
          settings: { slidesToShow: 6, slidesToScroll: 1 },
        },
        { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      ],
    }),

    (s = document.querySelector(".product-slider-four-column")),

    s &&
    e(s, {
      infinite: !0,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: !0,
      dots: !1,
      arrows: 0,
      prevArrow:
        '<span class="slick-prev d-none "><i class="feather-icon icon-chevron-left"></i></span>',
      nextArrow:
        '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
      responsive: [
        {
          breakpoint: 1400,
          settings: { slidesToShow: 7, slidesToScroll: 7 },
        },
        {
          breakpoint: 1200,
          settings: { slidesToShow: 6, slidesToScroll: 1 },
        },
        { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      ],
    }),


    (s = document.querySelectorAll(".product-slider"));
  s &&
    e(s, {
      infinite: !0,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: !0,
      dots: !1,
      arrows: !0,
      prevArrow:
        '<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',
      nextArrow:
        '<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',
      responsive: [
        { breakpoint: 1400, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 820, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    });
})();