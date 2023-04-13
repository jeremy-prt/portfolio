function toggleTheme() {
  var switchBtn = document.getElementById("switch");
  if (switchBtn.classList.contains("switch-left")) {
    switchBtn.classList.remove("switch-left");
    switchBtn.classList.add("switch-right");
    document.body.classList.add("dark-mode");
  } else {
    switchBtn.classList.remove("switch-right");
    switchBtn.classList.add("switch-left");
    document.body.classList.remove("dark-mode");
  }
}

/*--------------------Apparaition du scroll to top après 100px de défilement--------------------*/
const scroll_to_top = document.querySelector("#scroll_to_top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scroll_to_top.classList.add("scroll");
  } else {
    scroll_to_top.classList.remove("scroll");
  }
});
