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

// Funktion som skapar nya element och skriver ut till DOM.
function showCourses(courses) {
    const coursesEl = document.getElementById("course-info");

    // Loopar genom objekt-array och skriver ut nytt innehåll.
    courses.forEach((course) => {
        coursesEl.innerHTML += `
            <tr>
                <td>${course.code.toUpperCase()}</td>
                <td>${course.coursename}</td>
                <td>${course.progression}</td>
            </tr>
        `;      
    });
}