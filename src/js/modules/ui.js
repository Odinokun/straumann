module.exports = function () {

  // begin ui
  $(function () {
    $("#map-range-slider").slider({
      range: "max",
      min: 1,
      max: 10,
      value: 4,
      slide: function (event, ui) {
        $("#map-range-value").val(ui.value);
      }
    });
    $("#map-range-value").val($("#map-range-slider").slider("value"));
  });
  // end ui

};