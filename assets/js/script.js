// Header Start

// Search bar functionality
const searchBtn = document.getElementById("searchBtn");
const closeBtn = document.getElementById("search-close-btn");
const searchCon = document.getElementById("search-container");

searchBtn.addEventListener("click", (event) => {
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
