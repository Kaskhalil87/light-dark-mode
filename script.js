const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");
const textBox = document.getElementById("text-box");

//dark and light image mode

function imageMode(color) {
  image1.src = `/img/undraw_conceptual_idea_${color}.svg`;
  image2.src = `/img/undraw_content_team_${color}.svg`;
  image3.src = `/img/undraw_feeling_proud_${color}.svg`;
}

function toggleDarkAndLight(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 /50%)"
    : "rgb( 255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb( 255 255 255 / 50%)"
    : "rgb(0 0 0 /50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode("dark") : imageMode("Light");
}

//switch theme//
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkAndLight(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkAndLight(false);
  }
}

//event listener//

toggleSwitch.addEventListener("change", switchTheme);

//check local storage

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleDarkAndLight(true);
  }
}
