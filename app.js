// making Eng container appear and dissappear

const geoBox = Array.from(document.querySelectorAll("#geo-box"));
const languageBox = Array.from(document.querySelectorAll("#language-box"));

geoBox.forEach((element, index) => {
  element.addEventListener("mouseenter", () => {
    const engBox = Array.from(document.querySelectorAll("#eng-box"));
    engBox[index].className = "eng-box-active";
  });
});

languageBox.forEach((element, index) => {
  element.addEventListener("mouseleave", () => {
    const engBox = Array.from(document.querySelectorAll("#eng-box"));
    engBox[index].className = "eng-box-none";
  });
});

console.log(geoBox);
console.log(languageBox);

// burger menu transition and other parts styling after activating burger menu

const burgerMenuIcon = document.getElementById("burger-menu");

const burgerMenuActivation = () => {
  const burgerMenu = document.getElementById("menu-container");

  burgerMenuIcon.classList.contains("burger-menu-active")
    ? (burgerMenu.style.display = "block")
    : (burgerMenu.style.display = "none");

  const mainFooter = document.getElementById("main-footer-container");

  burgerMenuIcon.classList.contains("burger-menu-active")
    ? (mainFooter.style.display = "none")
    : (mainFooter.style.display = "block");

  const header = document.querySelector("header");
  burgerMenuIcon.classList.contains("burger-menu-active")
    ? (header.style.backgroundColor = "#f9fafa")
    : (header.style.backgroundColor = "white");

  const triggerMenu = document.querySelector(".button-menu");
  burgerMenuIcon.classList.contains("burger-menu-active")
    ? (triggerMenu.style.display = "none")
    : (triggerMenu.style.display = "block");
};

burgerMenuIcon.addEventListener("click", () => {
  burgerMenuIcon.classList.toggle("burger-menu-active");
  burgerMenuActivation();
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

// managing to be only one activated element in arrays

const onlyOneActive = (arr, activeElement, className) => {
  arr.forEach((element) => {
    if (element !== activeElement) {
      element.className = className;
    }
  });
};

// appearing needed list

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

// burger menu nav-accordion

const accordionActive = (arr, activeElement, className) => {
  arr.forEach((element) => {
    if (element !== activeElement) {
      element.classList.remove(className);
    }
  });
};

const accArray = Array.from(document.querySelectorAll("#top"));

accArray.forEach((element, index, array) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
    accordionActive(array, element, "active");
  });
});

// button menu logic

const buttonMenu = document.getElementById("trigger-box");

buttonMenu.addEventListener("click", () => {
  buttonMenu.classList.toggle("active");
});

// scroll styling

const footerContainer = document.getElementById("main-footer-container");
let scrollTimeout;

footerContainer.addEventListener("scroll", () => {
  footerContainer.classList.add("show-scrollbar");

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    footerContainer.classList.remove("show-scrollbar");
  }, 1000);
});

// first swiper my own logic

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".section-offers-slider");
  const thumb = document.querySelector(".section-offers-scroll-box");

  const updateScrollThumb = () => {
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const scrollLeft = slider.scrollLeft;
    const scrollThumbWidth = (slider.clientWidth / slider.scrollWidth) * 100;
    const scrollWidthPercentage = (scrollLeft / maxScrollLeft) * 100;
    thumb.style.width = `${scrollThumbWidth}%`;
    thumb.style.transform = `translateX(${scrollWidthPercentage}%)`;
  };

  let isDragging = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (event) => {
    isDragging = true;
    startX = event.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = "grabbing";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    slider.style.cursor = "grab";
  });

  document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const x = event.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the scroll speed if needed
    slider.scrollLeft = scrollLeft - walk;
  });

  slider.addEventListener("scroll", updateScrollThumb);
  window.addEventListener("resize", updateScrollThumb);
  updateScrollThumb(); // Initialize on page load
});
