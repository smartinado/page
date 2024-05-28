// Portfolio data (example)
const portfolioData = [
  { title: "Project 1", description: "Description of Project 1" },
  { title: "Project 2", description: "Description of Project 2" },
  { title: "Project 3", description: "Description of Project 3" }
];

// Function to display portfolio items
function displayPortfolio() {
  const portfolioGallery = document.getElementById('portfolio-gallery');
  let portfolioHTML = '';

  portfolioData.forEach(item => {
    portfolioHTML += `
      <div class="portfolio-item">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
  });

  portfolioGallery.innerHTML = portfolioHTML;
}

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  // You can add code here to handle form submission (e.g., sending data to a server)
  alert('Form submitted!'); // Example: Show alert
});

// Call displayPortfolio function when the page loads
window.onload = displayPortfolio;


