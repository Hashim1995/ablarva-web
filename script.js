let coprightYear = document.getElementById("year");

coprightYear.innerHTML = new Date().getFullYear();

function updateCountdown() {
  const targetDate = new Date("2023-10-19T00:00:00"); // Set your target date here
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const diff = targetDate - currentDate;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Update the countdown every 1 second
setInterval(updateCountdown, 1000);

// Initialize the countdown
updateCountdown();

function adjustFontSize() {
  let calculatedSize = 1 + 3 * ((window.innerWidth - 320) / 680);
  let fontSize = Math.max(3, Math.min(4, calculatedSize));
  const textElement = document.getElementById("responsiveText");
  textElement.style.fontSize = fontSize + "rem";

  // Check if the screen width is 480 pixels or less
  const isSmallScreen = window.matchMedia("(max-width: 480px)").matches;

  // Get all <b> elements inside textElement
  const bElements = textElement.querySelectorAll("b");

  bElements.forEach((bElement) => {
    // First, reset to original
    bElement.innerHTML = bElement.textContent.replaceAll("<br> ", " ");

    // Measure again
    if (isSmallScreen) {
      // If it's a small screen, add line break
      bElement.innerHTML = bElement.textContent.replaceAll(" ", "<br> ");
    }
  });
}

window.addEventListener("resize", adjustFontSize);
adjustFontSize();

window.addEventListener("resize", adjustFontSize);
adjustFontSize();
