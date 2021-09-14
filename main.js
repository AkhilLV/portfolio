const elements = {
  darkModeButton: document.getElementById('dark-mode-toggle'),
  projects: document.querySelector('.projects'),
  skills: document.querySelector('.skills'),
  skill: document.querySelectorAll('.skill'),
  about: document.querySelector('.about'),
  buttonGhost: document.querySelectorAll('.button-ghost'),
  email: document.querySelector('code')
}

const handleClick = e => {
  e.preventDefault()

  elements.projects.classList.toggle('projects-dark')
  elements.skills.classList.toggle('skills-dark')
  elements.about.classList.toggle('about-dark')

  elements.buttonGhost.forEach(button => {
    button.classList.toggle('button-dark')
  })

  elements.skill.forEach(el => {
    el.classList.toggle('skill-dark')
  })

  if (elements.darkModeButton.textContent === 'Light Mode') {
    elements.darkModeButton.textContent = 'Dark Mode'
  } else {
    elements.darkModeButton.textContent = 'Light Mode'
  }
}

const copyToClipboard = () => {
  const el = document.createElement('textarea');
  el.value = 'akhillav@gmail.com';
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('Copied to clipboard!')
};

elements.darkModeButton.addEventListener('click', handleClick)
elements.email.addEventListener('click', copyToClipboard)