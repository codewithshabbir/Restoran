AOS.init({
  offset: '140', // 50% viewport height ka offset
});
document.addEventListener("DOMContentLoaded", function() {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.display = 'none';
  }, 3000);
});

// Header functionality
var getHamburgerIcon = document.getElementById("hamburger");
var getHamburgerCrossIcon = document.getElementById("hamburger-cross");
var getMobileMenu = document.getElementById("mobile-menu");

// Open the mobile menu
getHamburgerIcon.addEventListener("click", function () {
    getMobileMenu.style.transform = "translateX(0%)";
});

// Close the mobile menu
function closeMenu() {
    getMobileMenu.style.transform = "translateX(-100%)";
}

// Close the mobile menu when the close icon is clicked
getHamburgerCrossIcon.addEventListener("click", closeMenu);

// Close the mobile menu if clicking outside of it
document.addEventListener("click", function(event) {
    var isClickInsideMenu = getMobileMenu.contains(event.target);
    var isClickOnIcon = getHamburgerIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnIcon) {
        closeMenu();
    }
});

// Search bar functionality
const searchBtn = document.getElementById("searchBtn");
const searchBtnMobile = document.getElementById("searchBtnMobile");
const closeBtn = document.getElementById("search-close-btn");
const searchCon = document.getElementById("search-container");

// Show search container when search button is clicked
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  searchCon.classList.remove("d-none");
  requestAnimationFrame(() => {
    searchCon.classList.add("show");
  });
});

// Show search container when mobile search button is clicked
searchBtnMobile.addEventListener("click", (event) => {
  event.preventDefault();
  searchCon.classList.remove("d-none");
  requestAnimationFrame(() => {
    searchCon.classList.add("show");
  });
});

// Hide search container when close button is clicked
closeBtn.addEventListener("click", () => {
  searchCon.classList.remove("show");
  setTimeout(() => {
    searchCon.classList.add("d-none");
  }, 500); // Delay hiding the search container to allow animation to complete
});


// Header scroll behavior
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const headerClass = document.querySelector('.header');

  const checkScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
      headerClass.classList.remove('my-3');
      headerClass.classList.add('my-2');
      sessionStorage.setItem('scrolled', 'true');
      
    } else {
      header.classList.remove('scrolled');
      headerClass.classList.add('my-3');
      headerClass.classList.remove('my-2');
      sessionStorage.removeItem('scrolled');
    }
  };

  // Check scroll position on page load
  if (sessionStorage.getItem('scrolled') === 'true') {
    header.classList.add('scrolled');
  }
  window.addEventListener('scroll', checkScroll);  
  checkScroll(); // Initial check
});

// Slider initialization

// Our Menu Slider
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

// Navigation Slider for Our Menu
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

// Custom animation for Our Menu slider
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

// Testimonials Slider
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

// Navigation Slider for Testimonials
$('.testimonials .slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonials .slider-content',
  dots: false,
  focusOnSelect: true,
  centerMode: true, // Center the active slide
  centerPadding: '0px',
  draggable: true,
  swipe: true,
  arrows: false, // Disable navigation arrows
  infinite: true,
});

// Our Chefs Slider
$('.our-chefs .our-chef-slider-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  focusOnSelect: true,
  centerMode: true, // Center the active slide
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

// Story Slider
$('.story-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  speed: 300,
  asNavFor: '.story-indicators .row',
  draggable: true,
  swipe: true,
});

// Navigation Slider for Story
$('.story-indicators > .row').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.story-content',
  dots: false,
  focusOnSelect: true,
  centerPadding: '0px',
  draggable: true,
  swipe: true,
  arrows: false, // Disable navigation arrows
  infinite: true,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});

// Partner Slider
$('.partner-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  speed: 300,
  draggable: true,
  swipe: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


$('.chef-choise-slider').slick({
  slidesToShow: 3,
  vertical: true,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  speed: 300,
  draggable: true,
  swipe: true,
  responsive: [
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1,
      }
    }
  ]
});

// Add click events for the chevron icons
$('.chef-choise-icons .fa-chevron-up').on('click', function() {
  $('.chef-choise-slider').slick('slickPrev');
});

$('.chef-choise-icons .fa-chevron-down').on('click', function() {
  $('.chef-choise-slider').slick('slickNext');
});

// Update copyright year
document.getElementById('copyrightCurrentYear').textContent = new Date().getFullYear();


var shoppingbtn = document.getElementById('shoppingbutton');
var shoppingbtnMobile = document.getElementById('shoppingbuttonMobile');
var shoppingCart = document.querySelector('.shopping-cart');
var cartClose = document.querySelectorAll('.shopping-cart-header > i');

shoppingbtn.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('chl');
  shoppingCart.style.right = "0";
});

shoppingbtnMobile.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('chl');
  shoppingCart.style.right = "0";
});

cartClose.forEach(function(closeBtn) {
  closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    shoppingCart.style.right = "-100vw";
  });
});