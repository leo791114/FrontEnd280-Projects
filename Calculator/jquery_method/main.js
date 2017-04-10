

$(function () {
    var numberLength = function (number) {
        if (number.length > 8) {
            result.text(number.substr(number.length - 8, 8))
        } else if (number.length > 16) {
            number = "";
            result.text("Error");
        }
    };

    var number = "";
    var newnumber = "";
    var operator = "";
    var result = $("#result");
    result.text('0');
    $(".nums").click(function () {
        number += $(this).text();
        result.text(number);
        numberLength(number);
    });

    // $("#dot").click(function () {
    //     number += ".";
    //     numberLength(number);
    // });

    $(".operators").not("#clearall, #clear, #equal").click(function () {
        operator = $(this).text();
        newnumber = number;
        number = "";
        result.text(newnumber);
    });

    $("#clearall, #clear").click(function () {
        number = "";
        result.text('0');
        if ($(this).attr("id") === 'clearall') {
            newnumber = "";
            operator = "";
        }
    });

    $("#equal").click(function () {
        if (newnumber == null || operator == null) {
            if (!number) {
                result.text('0');
            } else {
                result.text(number);
            }
        } else if (operator === '+') {
            var answer = parseFloat(newnumber) + parseFloat(number);
            numberLength(answer);
            result.text(answer);
            number = "";
            newnumber = "";

        } else if (operator === '-') {
            var answer = parseFloat(newnumber) - parseFloat(number);
            numberLength(answer);
            result.text(answer);
            number = "";
            newnumber = "";

        } else if (operator === 'x') {
            var answer = parseFloat(newnumber) * parseFloat(number);
            numberLength(answer);
            result.text(answer);
            number = "";
            newnumber = "";

        } else if (operator === '/') {
            var answer = parseFloat(newnumber) / parseFloat(number);
            numberLength(answer);
            result.text(answer);
            number = "";
            newnumber = "";

        }
    });





})