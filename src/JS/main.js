"use strict";

// Startar applikation.
window.onload = init;

// Funktion som körs direkt vid sidladdning.
function init() {
    // Visar rubrik.
    showHeading();
}

function showHeading() {
    // Skapar ny variabel.
    let headingEl = document.getElementById("heading");

    // Skapar ny rubrik med utskriftsformat <h1>Rubrik</h1>.
    let newHeadingEl = document.createElement("h1");
    let newHeadingText = document.createTextNode("Webbutveckling - Ramschema");
    newHeadingEl.appendChild(newHeadingText);

    // Skriver ut till DOM och rubriken läggs till.
    headingEl.appendChild(newHeadingEl)
}