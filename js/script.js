const searchForm = document.querySelector(".search-form");
const searchButton = document.querySelector(".search-toggle");
const searchInput = document.querySelector("#site-search");

searchButton.addEventListener("click", function () {
  searchForm.classList.add("is-open");
  searchInput.focus();
});



// SERVICES //

const scrollCue = document.querySelector(".scroll-cue");

if (scrollCue) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
      scrollCue.classList.add("is-hidden");
    } else {
      scrollCue.classList.remove("is-hidden");
    }
  });
}