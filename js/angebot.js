'use strict';

document.addEventListener('DOMContentLoaded', init);
function init() {
    document.getElementById("bild").addEventListener("click", function (e) { tauscheBild(e); });
    document.getElementById("bild").addEventListener("mouseover", function (e) { tauscheBild(e); });
    document.getElementById("bild").addEventListener("mouseout", function (e) { tauscheBild(e); });
    document.getElementById("lupe").addEventListener("click", function (e) { zeigeKreis(e, "steckdose"); });
    document.getElementById("lupe2").addEventListener("click", function (e) { zeigeKreis(e, "schalter"); });
    document.getElementById("lupe3").addEventListener("click", function (e) { zeigeKreis(e, "dieselmotor"); });
    document.getElementById("knopf1").addEventListener("click", function (e) { zeigePreis(e); });
    document.getElementById("animation").addEventListener("click", function (e) { zeigeAnimation(e); });
    //document.getElementById("knopf1").addEventListener("click", function (e) { wechslePreis(e); });
    document.getElementById("close").addEventListener("click", function (e) { schliessePopup(e); });
    document.getElementById("close").addEventListener("click", function (e) { schliessePopup(e); });
    setTimeout(zeigeLiveChat(), 10000);
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

function zeigeKreis(e, zweck) {
    let kreis = document.getElementById("kreis");
    let lupe = document.getElementById("lupe");
    let lupe2 = document.getElementById("lupe2");
    let lupe3 = document.getElementById("lupe3");
    if (zweck == "steckdose") {
        if (kreis.style.visibility == "hidden") {
            kreis.style.visibility = "visible";
            lupe.style.opacity = "0.3";
            kreis.style.top = "85px";
            kreis.style.left = "400px";
            lupe2.style.opacity = "unset";
            lupe3.style.opacity = "unset";
        } else {
            kreis.style.visibility = "hidden";
            lupe.style.opacity = "unset";
        }
    }
    else if (zweck == "schalter") {
        if (kreis.style.visibility == "hidden") {
            kreis.style.visibility = "visible";
            lupe2.style.opacity = "0.3";
            kreis.style.top = "85px";
            kreis.style.left = "250px";
            lupe1.style.opacity = "unset";
            lupe3.style.opacity = "unset";
        } else {
            kreis.style.visibility = "hidden";
            lupe2.style.opacity = "unset";
        }
    }
    else {
        if (kreis.style.visibility == "hidden") {
            kreis.style.visibility = "visible";
            lupe3.style.opacity = "0.3";
            kreis.style.top = "150px";
            kreis.style.left = "150px";
            lupe1.style.opacity = "unset";
            lupe2.style.opacity = "unset";
        } else {
            kreis.style.visibility = "hidden";
            lupe3.style.opacity = "unset";
        }
    }
}
/*----------------------animation--------------------------*/
let intervallId;
let kreisX = 50;
let kreisY = 900;
function zeigeAnimation(e) {
    let kreis = document.getElementById("kreis");

    kreis.style.visibility = "visible";
    intervallId = setInterval(bewegeKreis(e), 30);
}
function bewegeKreis(e) {
    if (kreis.style.top == "150px" && kreis.style.left == "150px") {
        clearIntervall(intervallId);
    }
    else {
        kreis.style.top = top + "px";
        kreis.style.left = left + "px";
    }

}
/*---------------------------------------------------- */
function zeigeLiveChat() {
    console.log("Ladet message");
    let fenster = document.getElementById("popup");
    fenster.style.display = "block";

    console.log("Window inner Height: " + window.innerHeight);
    console.log("Window inner Width: " + window.innerWidth);
    fenster.style.top = (window.innerHeight - 125) / 2 + "px";
    fenster.style.left = (window.innerWidth - 340) / 2 + "px";
}

function schliessePopup(e) {
    let popup = document.getElementById("popup");
    popup.style.display = "none";
}
