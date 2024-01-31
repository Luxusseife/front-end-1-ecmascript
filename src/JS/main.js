// Moment 2, EcmaScript. Jenny Lind, jeli2308.

"use strict";

// Deklarerar variabler.
const url = "https://dahlgren.miun.se/ramschema_ht23.php";
const coursesEl = document.getElementById("course-info");
let codeEl = document.getElementById("code");
let nameEl = document.getElementById("name");
let progressionEl = document.getElementById("progression");
let searchInputEl = document.getElementById("searchInput");

// Startar applikationen.
window.onload = init;

// Funktion som körs direkt vid sidladdning.
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

// Händelsehanterare.
codeEl.addEventListener("click", sortCode, false);
nameEl.addEventListener("click", sortName, false);
progressionEl.addEventListener("click", sortProgression, false);
searchInputEl.addEventListener("keyup", filtrateInput);

// Sorterar kurskod i bokstavsordning.
async function sortCode() {
    try {
        // Fetch-anrop.
        const response = await fetch(url);
        const courses = await response.json();

        // Sortering.
        courses.sort((a, b) => (a.code > b.code) ? 1 : -1); 

        // Rensar tidigare information.
        coursesEl.innerHTML = "";

        // Anropar funktion.
        showCourses(courses);

        // Felmeddelande.
        } catch {
            document.getElementById("error").innerHTML = "<p>Något gick fel, försök igen!</p>"
    }
}

// Sorterar kursnamn i bokstavsordning.
async function sortName() {
    try {
        // Fetch-anrop.
        const response = await fetch(url);
        const courses = await response.json();

        // Sortering.
        courses.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1); 

        // Rensar tidigare information.
        coursesEl.innerHTML = "";

        // Anropar funktion.
        showCourses(courses);

        // Felmeddelande.
        } catch {
            document.getElementById("error").innerHTML = "<p>Något gick fel, försök igen!</p>"
    }
}

// Sorterar progression i bokstavsordning.
async function sortProgression() {
    try {
        // Fetch-anrop.
        const response = await fetch(url);
        const courses = await response.json();

        // Sortering.
        courses.sort((a, b) => (a.progression > b.progression) ? 1 : -1); 

        // Rensar tidigare information.
        coursesEl.innerHTML = "";

        // Anropar funktion.
        showCourses(courses);

        // Felmeddelande.
        } catch {
            document.getElementById("error").innerHTML = "<p>Något gick fel, försök igen!</p>"
    }
}

// Kontrollerar och filtrerar input från sök-fältet.
async function filtrateInput() {
    try {
        // Fetch-anrop.
        const response = await fetch(url);
        const searchInput = await response.json();

        // Kontrollering.
        let searchText = searchInputEl.value.toLowerCase();

        // Filtrering.
        let filteredInput = searchInput.filter((input) => {
            return (
                input.code.toLowerCase().includes(searchText) ||
                input.coursename.toLowerCase().includes(searchText)
            );
        });

        // Rensar tidigare information.
        coursesEl.innerHTML = "";

        // Anropar funktion.
        showCourses(filteredInput);

        // Felmeddelande.
        } catch {
            document.getElementById("error").innerHTML = "<p>Något gick fel, försök igen!</p>"
    }
}