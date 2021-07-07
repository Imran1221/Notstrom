'use strict';

$(document).ready(function () {

    $("#btnDiesel").click(function (event) {
        $("#diesel").css("color", "red");
    });

    /*$("#btnBenzin").click(function (event) {
        $("td em").css("color", "red");
    });*/

    $("#btnBenzin").hover(function () {
        //$("td em").css("color", "red");
        $("td em").addClass("texthighlight");
    }, function () {
        // $("td em").css("color", "black");
        $("td em").removeClass("texthighlight");
    });

    /*----------------------nächste Aufgabe--------------------*/
    $("#oesterreich").click(function (event) {
        //$("#zielland").text("nach Österreich 5 - 7 Tage");
        $("#zielland").append(", nach Österreich 5 - 7 Tage");
        $("#oesterreich").hide();
    });
    $("#schweiz").click(function (event) {
        //$("#zielland").text("in die Schweiz 6 - 9 Tage");
        $("#zielland").append(", in die Schweiz 6 - 9 Tage");
        $("#schweiz").hide();
    });

    /*-----------------------nächste Aufgabe-------------*/

    //Durchnummerierung
    /*$("#pruefeVerfuegbarkeit").click(function (event) {
        $("#produktliste td").each(function (i) {
            $(this).prepend(`(${i}) `);
        });
    });*/

    //Änderung der Schriftgröße
    /*$("#pruefeVerfuegbarkeit").click(function (event) {
        $("#produktliste td").each(function (i) {
            $(this).css("font-size", `${i + 4}px`);
        });
    });*/

    //Nummerierung mit "Ok"
    /*$("#pruefeVerfuegbarkeit").click(function (event) {
        $("#produktliste td").each(function (i) {
            $(this).append(" [ok]");
        });
    });*/
    $("#pruefeVerfuegbarkeit").click(function (event) {
        $("td").each(function (i) {
            if (i % 5 == 0) {
                $(this).append(" <img src='img/ok.png'>");
            }
        });
    });

    $("#agb").hide();
    $("#fragezeichen").click(function (event) {
        //$("#agb").slideUp();
        //$("#agb").toggle();
        $("#agb").slideToggle();
    });


});