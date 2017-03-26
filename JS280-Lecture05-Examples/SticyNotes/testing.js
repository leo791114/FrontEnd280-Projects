
$(function () {
    $("p").text(123);
    var $test = $("#testing");
    $test.append("<li></li>");
    $("li:last-child").text("testing");
    $test.append("<li></li>");
    $("li:last-child").text("testing2");
});

