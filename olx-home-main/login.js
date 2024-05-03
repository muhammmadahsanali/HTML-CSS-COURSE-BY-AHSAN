document.addEventListener("DOMContentLoaded", function() {
  const backgroundLogin = document.querySelector(".background-login");
  const showPopupButton = document.querySelector(".show-popup");
  const closeButton = document.querySelector(".close-button");

  showPopupButton.addEventListener("click", function() {
    backgroundLogin.classList.remove("hidden");
  });

  closeButton.addEventListener("click", function() {
    backgroundLogin.classList.add("hidden");
  });
});