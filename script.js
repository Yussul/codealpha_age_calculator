document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    const day = parseInt(document.getElementById('dob-day').value);
    const month = parseInt(document.getElementById('dob-month').value) - 1; // JavaScript months are 0-indexed
    const year = parseInt(document.getElementById('dob-year').value);
    
    // Get today's date
    const today = new Date();
    
    // Create a Date object with the user's birthdate
    const birthDate = new Date(year, month, day);
    
    // Calculate age in years, months, and days
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
    
    // Adjust for negative values in months and days
    if (ageDays < 0) {
        ageMonths--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0); // last day of the previous month
        ageDays += lastMonth.getDate(); // Add the days of the previous month to compensate
    }
    
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12; // Adjust for negative months by adding 12
    }

    // Display result
    document.getElementById('age').textContent = `${ageYears} years, ${ageMonths} months, and ${ageDays} days`;
});

// Function to update the time
function updateClock() {
    const timeDisplay = document.getElementById("timeDisplay");
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Call updateClock immediately to display the time as soon as the page loads
  updateClock();
  
