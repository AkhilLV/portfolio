const dom = {
  toggleTheme: document.getElementById("theme-toggle"),
  hero: document.querySelector(".hero"),
  projects: document.querySelector(".projects"),
  skills: document.querySelector(".skills"),
  skill: document.querySelectorAll(".skill"),
  about: document.querySelector(".about"),
  buttonGhost: document.querySelectorAll(".button-ghost"),
  email: document.querySelector("code"),
  socialIcons: document.querySelector(".social-icons"),
};

const darkModeHTML = `<a href="#" class="button-dark center">
    Dark Mode
    <img src="images/night.svg" class="icon"/>
  </a>`;

const lightModeHTML = `<a href="#" class="button-white center">
    Light Mode
    <img src="images/light.svg" class="icon"/>
  </a>`;

const handleClick = (e) => {
  e.preventDefault();

  const PREV_THEME = dom.toggleTheme.textContent.trim();

  dom.hero.classList.toggle("hero-dark");
  dom.projects.classList.toggle("projects-dark");
  dom.skills.classList.toggle("skills-dark");
  dom.about.classList.toggle("about-dark");
  dom.socialIcons.classList.toggle("social-icons-dark");

  dom.buttonGhost.forEach((button) => {
    button.classList.toggle("button-dark");
  });

  dom.skill.forEach((el) => {
    el.classList.toggle("skill-dark");
  });

  while (dom.toggleTheme.firstChild) {
    dom.toggleTheme.removeChild(dom.toggleTheme.firstChild); // remove all html inside
  }

  if (PREV_THEME === "Light Mode") {
    dom.toggleTheme.insertAdjacentHTML("beforeend", darkModeHTML);
  } else {
    dom.toggleTheme.insertAdjacentHTML("beforeend", lightModeHTML);
  }
};

dom.toggleTheme.addEventListener("click", handleClick);
