'use strict';

document.addEventListener('DOMContentLoaded', init);
function init() {
    document.getElementById("bild").addEventListener("click", function (e) { tauscheBild(e); });
    document.getElementById("bild").addEventListener("mouseover", function (e) { tauscheBild(e); });
    document.getElementById("bild").addEventListener("mouseout", function (e) { tauscheBild(e); });
    document.getElementById("lupe").addEventListener("click", function (e) { zeigeKreis(e); });
    document.getElementById("knopf1").addEventListener("click", function (e) { zeigePreis(e); });
    //document.getElementById("knopf1").addEventListener("click", function (e) { wechslePreis(e); });
}

function markiereSonderpreis(e) {
    let preis = document.getElementById("preis");
    let em = document.getElementById("preisbereich").childNodes[0];
    preis.style.color = "red";
    preis.style.fontSize = "30px";
    em.style.color = "green";
    console.log(e.type);
}

let preisAnzeige = false; //False = Nettoreis, True = Nruttopreis
function zeigePreis(e) {
    let preisHtml = document.getElementById("preis");
    let preis = preisHtml.textContent;
    //Netto-Preis
    if (preisAnzeige == false) {
        let nettoPreis = preis / 1.19;
        preisHtml.innerHTML = nettoPreis.toFixed(2);
        document.getElementById("info").innerHTML = "zzgl.";
        document.getElementById("knopf1").innerHTML = "zeige Bruttopreis";
    }
    //Brutto-Preis
    else {
        let bruttoPreis = preis * 1.19;
        preisHtml.innerHTML = bruttoPreis.toFixed(2);
        document.getElementById("info").innerHTML = "inkl.";
        document.getElementById("knopf1").innerHTML = "zeige Nettopreis";
    }
    preisAnzeige = !preisAnzeige;
}

//Als statt zeigePreis(e) wäre eine weitere Lösung wechslePreis
function wechslePreis(e) {
    let p = document.getElementById("preis");
    let preis = p.textContent;
    if (document.getElementById("knopf1").innerHTML == "zeige Nettopreis") {
        let netto = preis / 1.19;
        p.innerHTML = "<em>" + netto.toFixed(2) + "</em";
        document.getElementById("info").innerHTML = "zzgl.";
        document.getElementById("knopf1").innerHTML = "zeige Bruttopreis";
    }
    else {
        let brutto = preis * 1.19;
        p.innerHTML = "<em>" + brutto.toFixed(2) + "</em";
        document.getElementById("info").innerHTML = "inkl.";
        document.getElementById("knopf1").innerHTML = "zeige Nettopreis";
    }
}

function tauscheBild(e) {
    //console.log(e);
    //alert(e.type);
    console.log(e.type);
    //console.log(e.target.id);
    if (e.type == "click") {
        alert("Bitte klicken Sie erneut auf das Bild für die andere Seite!");
    }
    if (document.getElementById("bild").getAttribute("src") == "img/notstromaggregat.jpg") {
        document.getElementById("bild").setAttribute("src", "img/notstromaggregat-rueckseite.jpg");
        document.getElementById("kreis").style.visibility = "hidden";
    }
    else {
        document.getElementById("bild").setAttribute("src", "img/notstromaggregat.jpg");
        if (document.getElementById("lupe").style.opacity == "0.3") {
            kreis.style.visibility = "visible";
        }
    }
}

function zeigeKreis(e) {
    let kreis = document.getElementById("kreis");
    let lupe = document.getElementById("lupe");
    if (kreis.style.visibility == "hidden") {
        kreis.style.visibility = "visible";
        lupe.style.opacity = "0.3";
    } else {
        kreis.style.visibility = "hidden";
        lupe.style.opacity = "unset";
    }
}