$( document ).ready(function() {
    $(".green").append("Some appended text.");
    $.get("pdftest2.html", function (data) {
      $(".onlyPrint").append(data);
    });

});
