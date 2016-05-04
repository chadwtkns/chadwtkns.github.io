$( document ).ready(function() {
    $(".green").append("Some appended text.");
    $("#pdftest").click(function () {
      $.get("pdftest2.html", function (data) {
        $(".green").append(data);
      });
    });

});
