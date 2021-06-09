'use strict';

document.addEventListener('DOMContentLoaded', init);
function init() {
    document.getElementById("preisRechner").addEventListener("click", berechnePreis);
    document.getElementById("anz").addEventListener("input", berechnePreis);
    document.getElementById("waehrung").addEventListener("change", berechnePreis);
    document.bestellformular.addEventListener("submit", function (evt) { pruefeFormular(evt) });
    document.getElementById("info").addEventListener("click", oeffneInfo);
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

function pruefeFormular(evt) {
    let strFehler = document.getElementById("strValidierung");
    let plzFehler = document.getElementById("plzValidierung");
    if (document.bestellformular.str.value == "") {
        strFehler.style.display = "block"
        strFehler.innerHTML = "Bitte geben Sie eine valide Straße ein!";
        strFehler.style.color = "red";
        evt.preventDefault();
    }
    if (document.bestellformular.plz.value.length < 4 || document.bestellformular.plz.value.length > 5) {
        plzFehler.style.display = "block";
        plzFehler.innerHTML = "Bitte geben Sie eine vier- oder fünfstellige Postleitzahl ein!";
        plzFehler.style.color = "red";
        evt.preventDefault();
    }
    if (isNan(bestellformular.plz.value)) {
        plzFehler.innerHTML = "Bitte geben Sie eine vier- oder fünfstellige Postleitzahl-Nummer ein!";
    }
    let testValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{ 1, 3 } \.[0 - 9]{ 1, 3 } \.[0 - 9]{ 1, 3 } \.[0 - 9]{ 1, 3 }])|(([a - zA - Z\-0 - 9] +\.) +[a - zAZ]{2,})) $ /;
    if (testValidEmail.test(bestellformular.email.value)) {
        alert("huhu");
    }
    if (strFehler.style.display == "none" || plzFehler.style.display == "none") {
        alert("alles richtig!");
    }
}
function oeffneInfo() {
    //window.location.assign("https://www.dhl.de/de/privatkunden.html"); //akuteller Tab geht zur Seite... (gleiches Fenster).
    //window.open("http://www.dhl.de", "_blank"); //neuer Tab zu der Seite wird geöffnet (neues Tab)...
    //window.open("http://www.dhl.de", "_blank", "width=500,height=500"); //neuer Tab in kleinerem Fenster "Popup" wird geöffnet (Popup)
    let paketdienst = document.bestellformular.paketdienst.value;
    console.log(paketdienst);
    if (paketdienst == "DHL") {
        window.open("http://www.dhl.de", "_blank");
    } else if (paketdienst == "UPS") {
        window.open("https://www.ups.com", "_blank");
    } else {
        window.open("https://www.hermes.com/", "_blank");
    }
}