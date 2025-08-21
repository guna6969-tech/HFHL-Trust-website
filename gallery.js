document.addEventListener("DOMContentLoaded", function () {
        const galleryImages = document.querySelectorAll(".gallery img");
        const popup = document.querySelector(".popup");
        const popupImage = popup.querySelector("img");
        const closeButton = popup.querySelector(".close");

        galleryImages.forEach((image) => {
          image.addEventListener("click", function () {
            popupImage.src = this.src;
            popup.style.display = "flex";
          });
        });

        closeButton.addEventListener("click", function () {
          popup.style.display = "none";
        });

        popup.addEventListener("click", function (e) {
          if (e.target === this) {
            this.style.display = "none";
          }
        });
      });