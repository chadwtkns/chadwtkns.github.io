$( document ).ready(function() {
    $(".green").append("Some appended text.");
    $.get("http://www.google.com", function (data) {
      $(".green").html(data);
    });
});
