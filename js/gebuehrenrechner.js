'use strict';

function berechnePreis(preis) {
    let anzahlTeilnehmer = prompt("Bitte geben Sie die Anzahl der Teilnehmer an!");
    let summe = 0;
    for (let i = 1; i <= anzahlTeilnehmer; i++) {
        if (i <= 2) {
            summe += preis
        }
        else if (i <= 4) {
            summe += preis * 0.7;
        }
        else if (i <= 7) {
            summe += preis * 0.5;
        }
        else {
            summe += preis * 0.4;
        }
    }
    summe = summe * 1.19;
    alert(`Preis: ${preis}
Teilnehmer: ${anzahlTeilnehmer}
Summe: ${summe.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
    abfrageUndAusgabeNachnamen(anzahlTeilnehmer);
    abfrageUndAusgabeAdresse();
    ausgabeBestelldatum();
}

function abfrageUndAusgabeNachnamen(anzahlTeilnehmer) {
    let nachNamen = [];
    for (let i = 1; i <= anzahlTeilnehmer; i++) {
        nachNamen.push(prompt(`Name des ${i}. Teilnehmers?`));
    }
    for (let nachName of nachNamen)
        console.log(nachName);
}

function abfrageUndAusgabeAdresse() {
    let firmenname = prompt("Eingabe Firmenname");
    let strasse = prompt("Eingabe Staße");
    let plz = prompt("Eingabe Postleitzahl");
    let ort = prompt("Eingabe Ort");
    let adresse = {
        firmenname: firmenname,
        strasse: strasse,
        plz: plz,
        ort: ort
    }
    console.log(adresse);
}
function ausgabeBestelldatum() {
    let datum = new Date();
    let neuesDatum = new Date();
    neuesDatum.setDate(datum.getDate() + 3);
    alert(`Vielen Dank für Ihre Bestellung am heutigen ${datum}. Die Buchungsbestätigung erhalten Sie spätestens in drei Tagen, d.h. am ${neuesDatum}.`);
}
