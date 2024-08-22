// Header Start

var getHubergerIcon = document.getElementById("hamburger");
var getHubergerCrossIcon = document.getElementById("hamburger-cross");
var getMobileMenu = document.getElementById("mobile-menu");

getHubergerIcon.addEventListener("click", function () {
    getMobileMenu.style.transform = "translateX(0%)";
});
 
function closeMenu() {
    getMobileMenu.style.transform = "translateX(-100%)";
}

getHubergerCrossIcon.addEventListener("click", closeMenu);

document.addEventListener("click", function(event) {
    var isClickInsideMenu = getMobileMenu.contains(event.target);
    var isClickOnIcon = getHubergerIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnIcon) {
        closeMenu();
    }
});

   

// Search bar functionality
const searchBtn = document.getElementById("searchBtn");
const searchBtnMobile = document.getElementById("searchBtnMobile");
const closeBtn = document.getElementById("search-close-btn");
const searchCon = document.getElementById("search-container");

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  searchCon.classList.remove("d-none");
  requestAnimationFrame(() => {
    searchCon.classList.add("show");
  });
});

searchBtnMobile.addEventListener("click", (event) => {
  event.preventDefault();
  searchCon.classList.remove("d-none");
  requestAnimationFrame(() => {
    searchCon.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  searchCon.classList.remove("show");
  setTimeout(() => {
    searchCon.classList.add("d-none");
  }, 500);
});
// Search bar

// Header End
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');

  const checkScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
      sessionStorage.setItem('scrolled', 'true');
    } else {
      header.classList.remove('scrolled');
      sessionStorage.removeItem('scrolled');
    }
  };

  // Check scroll position on page load
  if (sessionStorage.getItem('scrolled') === 'true') {
    header.classList.add('scrolled');
  }
  window.addEventListener('scroll', checkScroll);  
  checkScroll();
});




// our menu slider
$('#our-menus').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  speed: 300,
  asNavFor: '.slider-indicators-wrapper',
  draggable: false,
  swipe: false,
});
$('.slider-indicators-wrapper').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '#our-menus',
  dots: false,
  arrows: true,
  focusOnSelect: true,
  draggable: false,
  swipe: false,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1,
        arrows: true,
      }
    }
  ]
});

// $(".prev-btn").click(function () {
//   $(".slick-list").slick("slickPrev");
// });

// $(".next-btn").click(function () {
//   $(".slick-list").slick("slickNext");
// });

// $(".prev-btn").addClass("slick-disabled");

// $(".slick-list").on("afterChange", function () {
//   if ($(".slick-prev").hasClass("slick-disabled")) {
//     $(".prev-btn").addClass("slick-disabled");
//   } else {
//     $(".prev-btn").removeClass("slick-disabled");
//   }
//   if ($(".slick-next").hasClass("slick-disabled")) {
//     $(".next-btn").addClass("slick-disabled");
//   } else {
//     $(".next-btn").removeClass("slick-disabled");
//   }
// });

// Custom animation for bottom-to-top slide
$('#our-menus').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  var $nextSlide = $(slick.$slides[nextSlide]);
  var $currentSlide = $(slick.$slides[currentSlide]);

  // Set initial state for the next slide
  $nextSlide.css({
    'transform': 'translateY(10%)',
    'opacity': 0,
  });


  // Animate the next slide into view after a short delay
  setTimeout(function() {
    $nextSlide.css({
      'transform': 'translateY(0)',
      'opacity': 1,
      'transition': 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'
    });
  }, 50); 
});






// testimonial slider
  $('.testimonials .slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    speed: 300,
    asNavFor: '.testimonials .slider-nav',
    draggable: true,
    swipe: true,
  });

  // Initialize the slider for the navigation thumbnails
  $('.testimonials .slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonials .slider-content',
    dots: false,
    focusOnSelect: true,
    centerMode: true,  // Center the active slide
    centerPadding: '0px',
    draggable: true,
    swipe: true,
    arrows: false,  // Disable navigation arrows
    infinite: true,
  });




  // our chef slider

  $('.our-chefs .our-chef-slider-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    centerMode: true,  // Center the active slide
    centerPadding: '0px',
    fade: false,
    speed: 300,
    draggable: false,
    swipe: false,
     prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

