$( document ).ready(function() {
  $(".testLinks").each(function () {
     var href = $(this).attr("href");
    $.get(href, function (data) {
      $(".onlyPrint").append(data);
    });
  });


});
