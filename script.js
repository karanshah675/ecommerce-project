// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    })
}
if (close) {
    close.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
}
const toggleDarkMode = () => {
  const theme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    theme === "dark" ? "light" : "dark"
  );
};