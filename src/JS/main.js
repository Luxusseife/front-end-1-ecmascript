"use strict";

// Startar applikation.
window.onload = init;

// Funktion som körs direkt vid sidladdning.
function init() {
    // Visar tabell.
    getCourseInfo();
}

// Hämtar data från API, kursinfo.
function getCourseInfo() {
    // Skapar en variabel som lagrar API för infon i JSON-format.
    const url = "https://dahlgren.miun.se/ramschema_ht23.php";

    // Anropar API.
    fetch(url)
        .then(response => response.json())
        .then(data => showTable(data.information))
        .catch(error => console.log(error));
}

// Tar emot och skriver ut infon från API i tabellformat.
function showCourseInfo(information) {
    
}