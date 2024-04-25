const menuButton = document.getElementById('menu-button');
const menuDropdown = document.getElementById('menu-dropdown');
const menuList = document.getElementById('menu-list');

menuButton.addEventListener('click', () => {
  menuDropdown.classList.remove('hidden');
});

// Add event listeners for breakfast, lunch, and dinner buttons

const breakfastButton = document.querySelector('#menu-list button:first-child'); // Get the first button in the menu list
const lunchButton = document.querySelector('#menu-list button:nth-child(2)'); // Get the second button
const dinnerButton = document.querySelector('#menu-list button:last-child');

breakfastButton.addEventListener('click', () => {
  // Display breakfast menu items in menuList
});

lunchButton.addEventListener('click', () => {
  // Display lunch menu items in menuList
});

dinnerButton.addEventListener('click', () => {
  // Display dinner menu items in menuList
});

// Similar logic can be implemented for the ratings button
