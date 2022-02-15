const dom = {
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

  dom.projects.classList.toggle('projects-dark')
  dom.skills.classList.toggle('skills-dark')
  dom.about.classList.toggle('about-dark')

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

dom.darkModeButton.addEventListener('click', handleClick)
dom.email.addEventListener('click', copyToClipboard)