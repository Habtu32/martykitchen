const menuButton = document.getElementById('menu-button');
const menuDropdown = document.getElementById('menu-dropdown');

menuButton.addEventListener('click', () => {
  menuDropdown.classList.remove('hidden');
});

// Update: Handle menu category clicks

const menuList = document.querySelectorAll('#menu-dropdown a');

menuList.forEach(menuItem => {
  menuItem.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior (loading separate page)

    // Implement logic to display the selected category menu in menu.html

    const selectedCategory = menuItem.textContent; // Get the clicked category text

    // Call a function (or use AJAX) to fetch and display the menu items for the selected category in the `menu.html` page
    displayMenu(selectedCategory);
  });
});

// Function to display menu items (replace with your actual implementation)
function displayMenu(category) {
  // Fetch menu items for the category (using AJAX or other methods)
  const menuItems = getMenuItems(category); // Replace with your logic to fetch menu items

  // Update the content of menu.html with the fetched menu items
  // (You'll need to modify menu.html to dynamically display items)
  console.log("Menu items for", category, ":", menuItems); // Placeholder for now
}

// Function to fetch menu items (replace with your actual implementation)
function getMenuItems(category) {
  // Implement logic to fetch menu items from a database or server
  // This could involve AJAX or other methods depending on your setup
  return ["Example Item 1", "Example Item 2"]; // Placeholder for now
}
