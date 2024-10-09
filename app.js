// app.js - Fetching Prayer Times

document.addEventListener("DOMContentLoaded", () => {
    const prayerTimesDiv = document.getElementById("prayer-times");

    // API to get prayer times
    const apiURL = "https://api.aladhan.com/v1/timingsByCity?city=Herning&country=Denmark&method=2";

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const timings = data.data.timings;

            // Display the prayer times
            prayerTimesDiv.innerHTML = `
                <p>Fajr: ${timings.Fajr}</p>
                <p>Dhuhr: ${timings.Dhuhr}</p>
                <p>Asr: ${timings.Asr}</p>
                <p>Maghrib: ${timings.Maghrib}</p>
                <p>Isha: ${timings.Isha}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching prayer times:", error);
            prayerTimesDiv.innerHTML = "<p>Could not load prayer times. Please try again later.</p>";
        });
});
