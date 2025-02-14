// Function to update the UTC time every second
function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    setInterval(() => {
        const now = new Date();
        utcTimeElement.textContent = now.toUTCString();
    }, 1000);
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", updateUTCTime);
