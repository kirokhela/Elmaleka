// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// owl carousel slider js
var owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});

// Function to toggle between English and Arabic text
function toggleLanguage() {
    var languageText = document.getElementById('language-text').innerText;
    var elementsToChange = [
      {id: 'home-text', en: 'Home', ar: 'الصفحة الرئيسية'},
      {id: 'services-text', en: 'Services', ar: 'الخدمات'},
      {id: 'about-text', en: 'About', ar: 'عن الشركة'},
      {id: 'portfolio-text', en: 'Portfolio', ar: 'المعرض'},
      {id: 'contact-text', en: 'Contact Us', ar: 'اتصل بنا'},
      {id: 'login-text', en: 'Login', ar: 'تسجيل الدخول'},
      {id: 'location-text', en: 'Location', ar: 'الموقع'},
      {id: 'phone-text', en: 'Call : +01 123455678990', ar: 'اتصل : +01 123455678990'},
      {id: 'email-text', en: 'demo@gmail.com', ar: 'demo@gmail.com'},
      {id: 'detail-heading', en: 'We Build The Things Architects Dream Up', ar: 'نبني الأشياء التي يحلم بها المعماريون'},
    {id: 'read-more-text', en: 'Read More', ar: 'قراءة المزيد'},
    {id: 'contact-us-text', en: 'Contact Us', ar: 'اتصل بنا'},
    {id: 'language-switcher-menu', en: 'language', ar: 'اللغه'},
    ];
  
    // Toggle between Arabic and English
    if (languageText === 'EN') {
      document.getElementById('language-text').innerText = 'AR';
      elementsToChange.forEach(function (element) {
        document.getElementById(element.id).innerText = element.ar;
      });
    } else {
      document.getElementById('language-text').innerText = 'EN';
      elementsToChange.forEach(function (element) {
        document.getElementById(element.id).innerText = element.en;
      });
    }
  }
  