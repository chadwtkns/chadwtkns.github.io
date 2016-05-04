$( document ).ready(function() {
  var href = [];
  $(".testLinks").each(function () {
      href += $(this).attr("href");
  });
  $.get(href, function (data) {
    $(".onlyPrint").append(data);
  });
});
