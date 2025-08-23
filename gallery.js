document.addEventListener("DOMContentLoaded", function () {
        const galleryImages = document.querySelectorAll(".gallery img");
        const popup = document.querySelector(".popup");
        const popupImage = popup.querySelector("img");
        const closeButton = popup.querySelector(".close");

        galleryImages.forEach((image) => {
          image.addEventListener("click", function () {
            popupImage.src = this.src;
            popup.style.display = "flex";
            document.getElementsByClassName("nav-bar")[0].style.display = "none";
          });
        });

        closeButton.addEventListener("click", function () {
          popup.style.display = "none";
          document.getElementsByClassName("nav-bar")[0].style.display = "flex";
        });

        popup.addEventListener("click", function (e) {
          if (e.target === this) {
            this.style.display = "none";
            document.getElementsByClassName("nav-bar")[0].style.display = "flex";
          }
        });
      });
const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
});

