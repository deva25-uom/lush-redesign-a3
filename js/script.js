const searchForm = document.querySelector(".search-form");
const searchButton = document.querySelector(".search-toggle");
const searchInput = document.querySelector("#site-search");

searchButton.addEventListener("click", function () {
  searchForm.classList.add("is-open");
  searchInput.focus();
});
