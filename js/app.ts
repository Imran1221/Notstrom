interface Monat {
    nr: number;
    name: string;
}


function berechneRestmonate(aktuellerMonat: Monat) {
    return "Noch " + (12 - aktuellerMonat.nr) + " Monate übrig" + "im aktuellen Monat " + aktuellerMonat.name;
}

// let m = 10;

//Fehler    
let m = { nr: 10, name: "Oktober" };

document.getElementById("content").innerHTML = berechneRestmonate(m);
