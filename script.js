// Get the menu and rating buttons
const menuButton = document.getElementById('menu-button');
const ratingButton = document.getElementById('rating-button');

// Get the menu and rating sections
const menuSection = document.getElementById('menu-section');
const ratingSection = document.getElementById('rating-section');

// Add event listeners to the buttons
menuButton.addEventListener('click', () => {
	menuSection.classList.toggle('hidden');
});

ratingButton.addEventListener('click', () => {
	ratingSection.classList.toggle('hidden');
