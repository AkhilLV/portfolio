const dom = {
  darkModeButton: document.getElementById('dark-mode-toggle'),
  projects: document.querySelector('.projects'),
  skills: document.querySelector('.skills'),
  skill: document.querySelectorAll('.skill'),
  about: document.querySelector('.about'),
  buttonGhost: document.querySelectorAll('.button-ghost'),
  email: document.querySelector('code'),
  socialIcons: document.querySelector('.social-icons')
}

const handleClick = e => {
  e.preventDefault()

  dom.projects.classList.toggle('projects-dark')
  dom.skills.classList.toggle('skills-dark')
  dom.about.classList.toggle('about-dark')
  dom.socialIcons.classList.toggle('social-icons-dark')

  dom.buttonGhost.forEach(button => {
    button.classList.toggle('button-dark')
  })

  dom.skill.forEach(el => {
    el.classList.toggle('skill-dark')
  })

  if (dom.darkModeButton.textContent === 'Light Mode') {
    dom.darkModeButton.textContent = 'Dark Mode'
  } else {
    dom.darkModeButton.textContent = 'Light Mode'
  }
}

dom.darkModeButton.addEventListener('click', handleClick)
