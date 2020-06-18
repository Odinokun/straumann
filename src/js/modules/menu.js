module.exports = function() {

  // begin menu
  $('.header__burger').on('click', function (e) {
    e.preventDefault();
    $('.header-menu').addClass('active');
  });

  $('.header-menu__close').on('click', function (e) {
    e.preventDefault();
    $('.header-menu').removeClass('active');
  });
  // end menu

};