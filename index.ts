#!/usr/bin/env node 
const toggledButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLDivElement;

toggledButton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
});
