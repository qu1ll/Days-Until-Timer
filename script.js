// Set the target date
const targetDate = new Date("April 28, 2027 00:00:00").getTime();
// Update the countdown every second
setInterval(() => {
    // Get the current time
    const now = new Date().getTime();

    // Calculate the remaining time
    const remainingTime = targetDate - now;

    // Calculate the days, hours, minutes, and seconds
    const years = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerHTML = 
        `${years} years, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}, 1000);