'use strict';

document.addEventListener('DOMContentLoaded', init);
function init() {
    document.getElementById("bild").addEventListener("click", function (e) { tauscheBild(e); });
    document.getElementById("bild").addEventListener("mouseover", function (e) { tauscheBild(e); });
    document.getElementById("bild").addEventListener("mouseout", function (e) { tauscheBild(e); });
    document.getElementById("lupe").addEventListener("click", function (e) { zeigeKreis(400, 85, this.id); });
    document.getElementById("lupe2").addEventListener("click", function (e) { zeigeKreis(250, 85, this.id); });
    document.getElementById("lupe3").addEventListener("click", function (e) { zeigeKreis(150, 150, this.id); });
    document.getElementById("knopf1").addEventListener("click", function (e) { zeigePreis(e); });
    //document.getElementById("knopf1").addEventListener("click", function (e) { wechslePreis(e); });
    document.getElementById("animation").addEventListener("click", function (e) { starteAnimation(); });
    document.getElementById("close").addEventListener("click", function (e) { schliessePopup(e); });
    document.getElementById("close2").addEventListener("click", function (e) { schliessePopup(e); });
    setTimeout(zeigeLiveChat, 1000);
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
        if (document.getElementById("lupe").style.opacity == "0.3" ||
            document.getElementById("lupe2").style.opacity == "0.3" ||
            document.getElementById("lupe3").style.opacity == "0.3") {
            kreis.style.visibility = "visible";
        }
    }
}

function zeigeKreis(x, y, id) {
    let kreis = document.getElementById("kreis");
    if (document.getElementById(id).style.opacity == "unset") {
        kreis.style.visibility = "visible";
        document.getElementById("lupe").style.opacity = "unset";
        document.getElementById("lupe2").style.opacity = "unset";
        document.getElementById("lupe3").style.opacity = "unset";
        document.getElementById(id).style.opacity = "0.3";
        kreis.style.left = x + "px";
        kreis.style.top = y + "px";
    } else {
        kreis.style.visibility = "hidden";
        document.getElementById(id).style.opacity = "unset";
    }
}
/*----------------------animation--------------------------*/
let intervalId;
let kreisX;
let kreisY;
let intervalTimer;
function starteAnimation() {
    intervalTimer = setInterval(starteAnimationTimer, 1000);
    kreisX = 500;
    kreisY = 85;
    let kreis = document.getElementById("kreis");
    kreis.style.top = kreisY + "px";
    kreis.style.left = kreisX + "px";
    kreis.style.visibility = "visible";
    intervalId = window.setInterval(bewegeKreis, 50);
    document.getElementById("motor").style.color = "black";
}
function bewegeKreis(e) {
    let kreis = document.getElementById("kreis");
    //Highlights der Features
    if (kreisX == 400 && kreisY == 85) {
        document.getElementById("steckdosen").style.color = "red";
        kreis.style.opacity = 0.8;
    }
    else if (kreisX == 250 && kreisY == 85) {
        document.getElementById("schalter").style.color = "red";
        document.getElementById("steckdosen").style.color = "black";
        kreis.style.opacity = 0.8;
    }
    else if (kreisY == 150) {
        document.getElementById("motor").style.color = "red";
        document.getElementById("schalter").style.color = "black";
        kreis.style.opacity = 0.8;
    }
    else {
        kreis.style.opacity = 0.5;
    }
    kreisX -= 5;
    if (kreisX < 250) {
        kreisY += 5;
    }
    kreis.style.top = kreisY + "px";
    kreis.style.left = kreisX + "px";
    if (kreisY > 150) {
        window.clearInterval(intervalId);
    }
}

// Set the date we're counting down to
var countDownDate = new Date().getTime() + 5000;

// Update the count down every 1 second
function starteAnimationTimer() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(intervalTimer);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
};
/*---------------------------------------------------- */

function zeigeLiveChat() {
    console.log("Ladet message");
    let popup = document.getElementById("popup");
    popup.style.display = "block";

    let hoehe = window.innerHeight;
    let breite = window.innerWidth;
    console.log("Window inner Height: " + hoehe + "\nWindow inner Width: " + breite);

    let breitePopup = getComputedStyle(popup).width;
    let hoehePopup = getComputedStyle(popup).height;
    console.log("Popup Height: " + hoehePopup + "\nPopup Width: " + breitePopup);

    let abstandLeft = (breite - 340) / 2;
    let abstandTop = (hoehe - 125) / 2;
    console.log("Abstand Top: " + abstandTop + "\nAbstand Left " + abstandLeft);

    popup.style.top = abstandTop + "px";
    popup.style.left = abstandLeft + "px";
}
window.addEventListener("resize", zeigeLiveChat);
function schliessePopup(e) {
    let popup = document.getElementById("popup");
    popup.style.display = "none";
}
