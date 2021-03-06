module.exports = function() {

  //begin INDEX SLIDER
    //проверка ширины окна при загрузке
    if (window.innerWidth >= 768) {
      $('#index-slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        infinite: false
      });

      //скролл при прокрутке колесом мыши
      $("#index-slider").on("wheel", function (e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
          $(this).slick("slickPrev");
        } else {
          $(this).slick("slickNext");
        }
      });
    }

    //counter for index-slider dots
    $(window).on('load', function () {
      let btns = $('#index-slider').find('.slick-dots li button');
      let dots = $('#index-slider').find('.slick-dots');

      for (let i = 0; i < btns.length; i++){
        let number = i + 1;
        let btn = $(btns)[i];

        if (number < 10) {
          number = '0' + number
        }

        $(btn).html(number);
      }

      $(dots).css('opacity', '1');
    });
  //end INDEX SLIDER

  //begin SEARCH CLINIC
  // $('.search-clinic__slider').slick({
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   autoplay: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   prevArrow: "<div class='prev'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"14\" viewBox=\"0 0 33 14\"><g><g><path d=\"M6.173.33L.55 5.952c-.44.439-.44 1.15 0 1.59l5.623 5.623a1.125 1.125 0 0 0 1.59-1.59L4.06 7.872h27.036a1.125 1.125 0 0 0 0-2.249H4.06L7.763 1.92a1.121 1.121 0 0 0 0-1.59 1.125 1.125 0 0 0-1.59 0z\"/></g></g></svg></div>",
  //   nextArrow: "<div class='next'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"14\" viewBox=\"0 0 33 14\"><g><g><path d=\"M26.33 13.166l5.623-5.623c.439-.44.439-1.151 0-1.59L26.33.329a1.125 1.125 0 0 0-1.59 1.59l3.702 3.704H1.407a1.125 1.125 0 0 0 0 2.25h27.035l-3.703 3.703a1.121 1.121 0 0 0 0 1.59c.44.44 1.151.44 1.59 0z\"/></g></g></svg></div>"
  // });
  //end SEARCH CLINIC

  //begin DOCS SLIDER
  $('#docs-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<div class='prev'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"50\" viewBox=\"0 0 30 50\"><path d=\"M24.845.004l4.394 4.437L8.86 24.64l20.39 20.393-4.42 4.418L0 24.622z\"/></svg></div>",
    nextArrow: "<div class='next'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"50\" viewBox=\"0 0 30 50\"><path d=\"M4.375 49.452L-.02 45.015l20.378-20.201L-.032 4.422 4.388.004 29.22 24.833z\"/></svg></div>",
    responsive: [
      {
        breakpoint: 1241,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 941,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 641,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });
  //end DOCS SLIDER

  //begin VIDEO SLIDER
  $('#video-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: "<div class='prev'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"50\" viewBox=\"0 0 30 50\"><path d=\"M24.845.004l4.394 4.437L8.86 24.64l20.39 20.393-4.42 4.418L0 24.622z\"/></svg></div>",
    nextArrow: "<div class='next'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"50\" viewBox=\"0 0 30 50\"><path d=\"M4.375 49.452L-.02 45.015l20.378-20.201L-.032 4.422 4.388.004 29.22 24.833z\"/></svg></div>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  //begin VIDEO SLIDER
  $('#reviews-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<div class='prev'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"50\" viewBox=\"0 0 30 50\"><path d=\"M24.845.004l4.394 4.437L8.86 24.64l20.39 20.393-4.42 4.418L0 24.622z\"/></svg></div>",
    nextArrow: "<div class='next'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"50\" viewBox=\"0 0 30 50\"><path d=\"M4.375 49.452L-.02 45.015l20.378-20.201L-.032 4.422 4.388.004 29.22 24.833z\"/></svg></div>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 641,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });
  //end VIDEO SLIDER

};