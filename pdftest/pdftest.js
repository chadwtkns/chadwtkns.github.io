$(document).ready(function() {
  var href = [];

  $(".testLinks").each(function () {
    var something;
    something = $(this).attr("href");
    href.push(something);
  });
  
  for (var i = 0; i < href.length; i++) {
    $.get(href[i], function (data) {
      $(".onlyPrint").append(data);
    });
  }
});
