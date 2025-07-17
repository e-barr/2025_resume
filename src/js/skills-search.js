// This file contains JavaScript functionality for the Skills section, implementing a search feature that allows users to filter skills based on input.

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('skill-search');
    const skillsList = document.getElementById('skills-list');
    const skills = Array.from(skillsList.getElementsByTagName('li'));

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        skills.forEach(skill => {
            const skillText = skill.textContent.toLowerCase();
            if (skillText.includes(query)) {
                skill.style.display = 'list-item';
            } else {
                skill.style.display = 'none';
            }
        });
    });
});