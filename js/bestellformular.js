'use strict';

document.addEventListener('DOMContentLoaded', init);
function init() {
    document.getElementById("preisRechner").addEventListener("click", berechnePreis);
    document.getElementById("anz").addEventListener("input", berechnePreis);
    document.getElementById("waehrung").addEventListener("change", berechnePreis)
}
function berechnePreis() {
    let anzahl = document.bestellformular.anzahl.value;
    let summe = anzahl * 999;
    if (document.bestellformular.waehrung.value == "CHF") {
        summe *= 0.5; //TO-DO Kurs automatisch laden
    }
    else if (document.bestellformular.waehrung.value == "USD") {
        summe *= 2; //TO-DO Kurs automatisch laden
    }
    document.getElementById("summe").innerHTML = summe.toFixed(2);
}