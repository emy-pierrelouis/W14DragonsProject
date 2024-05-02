// Jquery version of the navigation (used in the index page)

$(document).ready(function() {
    $(window).scroll(function() {
      scrollFunction();
    });

    function scrollFunction() {
      if ($(document).scrollTop() > 30) {
        $(".company-name").css("fontSize", "30px");
        $(".company-slogan").css("fontSize", "15px");
      } else {
        $(".company-name").css("fontSize", "60px");
        $(".company-slogan").css("fontSize", "30px");
      }
    }
  });