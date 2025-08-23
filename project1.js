window.onload = function () {
        let image = document.getElementById("img1");
        let arr = [
          "images/image1.jpg",
          "images/eluru.jpg",
          "images/gallery1.jpg",
          "images/gallery3.jpg",
          "images/grocery.jpg",
        ];
        let count = 0;

        document.querySelector(".left").onclick = function () {
          count = (count - 1 + arr.length) % arr.length;
          image.src = arr[count];
        };

        document.querySelector(".right").onclick = function () {
          count = (count + 1) % arr.length;
          image.src = arr[count];
        };

        setInterval(() => {
          count = (count + 1) % arr.length;
          image.src = arr[count];
        }, 9000);
      };
const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
});
