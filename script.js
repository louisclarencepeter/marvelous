document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".cards");
  
    cards.forEach((card, index) => {
      // Delay based on the card index
      const delay = index * 200; // Adjust the delay as needed
  
      // A class to trigger the animation
      setTimeout(() => {
        card.classList.add("show-card");
      }, delay);
    });
  });
  