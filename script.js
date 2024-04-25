Here is a basic HTML structure and CSS styling using Tailwind CSS to build the restaurant website:
HTML
HTML
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Restaurant Website</title>
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<header class="h-screen bg-white">
		<div class="container mx-auto p-4">
			<img src="logo.png" alt="Restaurant Logo" class="w-48 mx-auto">
		</div>
		<div class="bg-orange-500 h-24 flex justify-center items-center">
			<button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" id="menu-button">Food Menu</button>
			<button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" id="rating-button">Customer Ratings</button>
		</div>
	</header>
	<main class="container mx-auto p-4">
		<!-- Menu Section -->
		<div class="hidden" id="menu-section">
			<h2 class="text-3xl font-bold mb-4">Food Menu</h2>
			<div class="flex justify-center mb-4">
				<button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" id="breakfast-button">Breakfast</button>
				<button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" id="lunch-button">Lunch</button>
				<button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" id="dinner-button">Dinner</button>
			</div>
			<!-- Menu Items -->
			<div class="hidden" id="breakfast-menu">
				<!-- Breakfast Menu Items -->
			</div>
			<div class="hidden" id="lunch-menu">
				<!-- Lunch Menu Items -->
			</div>
			<div class="hidden" id="dinner-menu">
				<!-- Dinner Menu Items -->
			</div>
		</div>
		<!-- Rating Section -->
		<div class="hidden" id="rating-section">
			<!-- Customer Ratings -->
		</div>
	</main>
	<script src="script.js"></script>
</body>
</html>
CSS (in styles.css file)
HTML
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/* Global Styles */
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: Arial, sans-serif;
}

header {
	background-image: linear-gradient(to bottom, #fff, #ccc);
	background-size: 100% 200px;
	background-position: 0% 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

header .container {
	max-width: 1200px;
}

header img {
	width: 48px;
	height: 48px;
	margin: 0 auto;
}

.bg-orange-500 {
	background-color: #ffa07a;
}

.hover\:bg-orange-700:hover {
	background-color: #ff9900;
}

.text-white {
	color: #fff;
}

.font-bold {
	font-weight: bold;
}

.py-2 {
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
}

.px-4 {
	padding-left: 1rem;
	padding-right: 1rem;
}

.rounded {
	border-radius: 0.25rem;
}

main {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

#menu-section {
	display: none;
}

#menu-section h2 {
	margin-bottom: 1.5rem;
}

#menu-section button {
	margin-bottom: 1.5rem;
}

#breakfast-menu,
#lunch-menu,
#dinner-menu {
	display: none;
}

/* Add styles for menu items and customer ratings */
JavaScript (in script.js file)
HTML
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
	ratingSection.classList.toggle('hidden);
