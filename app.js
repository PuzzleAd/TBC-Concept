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

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger-menu-active");
});

// dropDownBox dynamic side

const navArray = Array.from(document.querySelectorAll("#nav-box"));

const dropDownToggle = () => {
  let isActive = navArray.some((element) =>
    element.classList.contains("nav-active")
  );

  const dropContainer = document.getElementById("drop-down-container");

  isActive
    ? (dropContainer.className = "drop-active")
    : (dropContainer.className = "drop-none");
};

const onlyOneActive = (arr, activeElement, className) => {
  arr.forEach((element) => {
    if (element !== activeElement) {
      element.className = className;
    }
  });
};

const listDropper = (activeIndex) => {
  const listArray = Array.from(document.querySelectorAll("#drop-down-list"));

  listArray.forEach((element, index, array) => {
    if (array[activeIndex].classList.contains("list-active")) {
      array[activeIndex].classList.remove("list-active");
      array[activeIndex].classList.add("list-none");
    } else {
      array[activeIndex].classList.add("list-active");
      array[activeIndex].classList.remove("list-none");
      onlyOneActive(array, array[activeIndex], "list-none");
    }
  });
};

navArray.forEach((element, index, array) => {
  element.addEventListener("click", () => {
    element.classList.contains("nav-active")
      ? (element.className = "nav-none")
      : (element.className = "nav-active");
    onlyOneActive(array, element, "nav-none");
    dropDownToggle();
    listDropper(index);
  });
});
