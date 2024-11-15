import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import wipeOut from "./utils.js";

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");

home();

homeBtn.addEventListener("click", () => {
  wipeOut();
  home();
});

menuBtn.addEventListener("click", () => {
  wipeOut();
  menu();
});

aboutBtn.addEventListener("click", () => {
  wipeOut();
  about();
});
// home();
