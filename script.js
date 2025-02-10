// JavaScript for Dynamic Skill Highlighting

// Get all skill elements
const skills = document.querySelectorAll('.skills span');

// Add mouseover and mouseout events to highlight skills dynamically
skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = 'scale(1.2)';
        skill.style.backgroundColor = '#7f8c8d';
        skill.style.color = 'white';
        skill.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
    });

    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'scale(1)';
        skill.style.backgroundColor = 'white';
        skill.style.color = '#333';
    });
});
