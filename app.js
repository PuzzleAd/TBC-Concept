// making Eng container appear and dissappear

const geoBox = document.getElementById("geo-box");
const languageBox = document.getElementById("language-box");

geoBox.addEventListener("mouseenter", () => {
  const engBox = document.getElementById("eng-box");
  engBox.className = "eng-box-active";
});

languageBox.addEventListener("mouseleave", () => {
  const engBox = document.getElementById("eng-box");
  engBox.className = "eng-box-none";
});

// burger menu transition

const burgerMenu = document.getElementById("burger-menu");

const burgerMenuTransition = () => {
  const firstLine = document.getElementById("first-line");
  const secondLine = document.getElementById("second-line");
  const thirdLine = document.getElementById("third-line");

  firstLine.classList.toggle("first-line-active");

  secondLine.classList.toggle("second-line-active");

  thirdLine.classList.toggle("third-line-active")
};

burgerMenu.addEventListener("click", () => {
  burgerMenuTransition();
});
