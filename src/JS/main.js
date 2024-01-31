// Moment 2, EcmaScript. Jenny Lind, jeli2308.

"use strict";

// Deklarerar globala variabler som används i multipla funktioner.
const coursesEl = document.getElementById("course-info");
const searchInputEl = document.getElementById("searchInput");

// Startar applikationen.
window.onload = init;

// Funktion som körs direkt vid sidladdning.
async function init() {
    // Deklarerar variabel.
    const url = "https://dahlgren.miun.se/ramschema_ht23.php";

    try {
        // Fetch-anrop.
        const response = await fetch(url);
        const data = await response.json();

        // Anropar funktion.
        showCourses(data);

        // Händelsehanterare, sortering av kurskod vid klick.
        let codeEl = document.getElementById("code");
        codeEl.addEventListener("click", function () {
            sortCode(data);
            showCourses(data);
        });
        
        // Händelsehanterare, sortering av kursnamn vid klick.
        let nameEl = document.getElementById("name");
        nameEl.addEventListener("click", function () {
            sortName(data);
            showCourses(data);
        });

        // Händelsehanterare, sortering av progression vid klick.
        let progressionEl = document.getElementById("progression");
        progressionEl.addEventListener("click", function () {
            sortProgression(data);
            showCourses(data);
        });

        // Händelsehanterare, filtrerar kursinformation efter input i sökfältet.
        searchInputEl.addEventListener("keyup", function () {
            filtrateInput(data);
        });

        // Felmeddelande.
        } catch {
            document.getElementById("error").innerHTML = "<p>Något gick fel, försök igen!</p>";
    }
}

// Funktion som skapar nya element och skriver ut till DOM.
function showCourses(courses) {
    // Loopar genom objekt-array och skriver ut nytt tabell-innehåll.
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

// Sorterar kurskod i bokstavsordning.
function sortCode(data) {
    // Sortering.
    data.sort((a, b) => (a.code > b.code) ? 1 : -1);

    // Rensar tidigare information.
    coursesEl.innerHTML = "";
}

// Sorterar kursnamn i bokstavsordning.
function sortName(data) {
    // Sortering.
    data.sort((a, b) => (a.coursename > b.coursename) ? 1 : -1);
    
    // Rensar tidigare information.
    coursesEl.innerHTML = "";
}

// Sorterar progression i bokstavsordning.
function sortProgression(data) {
    // Sortering.
    data.sort((a, b) => (a.progression > b.progression) ? 1 : -1);

    // Rensar tidigare information.
    coursesEl.innerHTML = "";
}

// Kontrollerar och filtrerar input från sök-fältet.
function filtrateInput(data) {
    // Kontrollering.
    let searchText = searchInputEl.value.toLowerCase();

    // Filtrering.
    let filteredInput = data.filter((input) => {
        return (
            input.code.toLowerCase().includes(searchText) ||
            input.coursename.toLowerCase().includes(searchText)
        );
    });

    // Rensar tidigare information.
    coursesEl.innerHTML = "";

    // Anropar funktion.
    showCourses(filteredInput);
}