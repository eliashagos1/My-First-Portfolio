const toggleButton = document.getElementsByClassName('toggle-button')[0]
const bigMenu = document.getElementsByClassName('big-menu')[0]

toggleButton.addEventListener('click', () => {
    bigMenu.classList.toggle('active')
} )

const projectsLink = document.querySelector('.projects');
const projectsSection = document.querySelector('#projects');

projectsLink.addEventListener('click', () => {
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});

