import "./styles.css";
import homepage from "./homepage";
import about from "./about";
import menu from "./menu";

const content = document.querySelector("#content");
const navLinksElements = document
  .querySelector(".nav-links")
  .querySelectorAll(".link");

const footerLinksElements = document
  .querySelector("footer div")
  .querySelectorAll(".footer-link");

const pages = [homepage(), about(), menu()];

let currentPageIndex = 0;
let currentPage = pages[currentPageIndex];

content.innerHTML = "";
content.append(...currentPage);

const updateCurrentPage = () => {
  currentPage = pages[currentPageIndex];
};

const removeActiveClassListFromNavLinks = () => {
  navLinksElements.forEach((el) => {
    el.classList.remove("active");
  });
};

const changePage = (index) => {
  currentPageIndex = index;
  removeActiveClassListFromNavLinks();
  navLinksElements[index].classList.add("active");
  content.innerHTML = "";
  updateCurrentPage();
  content.append(...currentPage);
};

navLinksElements.forEach((el, i) => {
  el.addEventListener("click", () => {
    changePage(i);
  });
});

footerLinksElements.forEach((el, i) => {
  el.addEventListener("click", () => {
    changePage(i);
  });
});
