$( document ).ready(function() {
    $(".green").append("Some appended text.");
    $.get("pdftest2.html", function (data) {
      $(".green").html(data);
    });
});
