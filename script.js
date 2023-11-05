var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "UI-UX Designer",
      "Backend Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

  // script.js


  const hireMeButton = document.getElementById('btn'); // Assuming your button has the id "btn"
  const hireMeSection = document.getElementById('hireme'); // Make sure this matches the id of the "Contact Me" section
  
  hireMeButton.addEventListener('click', () => {
    hireMeSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
  });



//   read more button
  
const readMoreButton = document.getElementById('read-more-btn');
const projectDescription = document.getElementById('project-description');

readMoreButton.addEventListener('click', () => {
  projectDescription.classList.toggle('show-description');
  if (readMoreButton.textContent === 'Read More') {
    readMoreButton.textContent = 'Read Less';
  } else {
    readMoreButton.textContent = 'Read More';
  }
});


