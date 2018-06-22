//@koala-prepend "vendors/jquery-3.3.1.min.js"
//@koala-prepend "vendors/slick.min.js"

window.initMap= function() {
    var map;
var myLatlng = new google.maps.LatLng(-37.8070,144.9554);
    map = new google.maps.Map(document.getElementById('contact-map'), {
      center: myLatlng,
      zoom: 14
    });
    var marker = new google.maps.Marker({
        position: myLatlng
    
    });
    marker.setMap(map);
  }
  
$(document).ready(function () {
    $(".testimonials").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            }

        ]
    });
    $(".techslide").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 9000,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }

            }

        ]
    });
    //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $('#topBtn').fadeIn();
    if (scrolled < 300) $('#topBtn').fadeOut();
  });
  
  //Click event
  $('#topBtn').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });


});