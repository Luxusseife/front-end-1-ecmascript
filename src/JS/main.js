// Moment 2, EcmaScript. Jenny Lind, jeli2308.

"use strict";

// 
const url = "https://dahlgren.miun.se/ramschema_ht23.php";

// Startar applikationen.
window.onload = init;

// Funktion körs direkt vid sidladdning.
async function init() {
    try {
        // Fetch-anrop.
        const response = await fetch(url);
        const courses = await response.json();

        // Anropar funktion.
        showCourses(courses);

        // Felmeddelande.
    } catch {
        document.getElementById("error").innerHTML = "<p>Något gick fel, försök igen!</p>"
    }
}

function showCourses(courses) {
    console.table(courses);
}