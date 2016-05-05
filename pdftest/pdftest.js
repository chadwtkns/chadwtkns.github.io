$(document).ready(function() {
  var href = [];

  function getCallBack(data) {
    $(".onlyPrint").append(data);
  }

  $(".testLinks").each(function () {
    var something;
    something = $(this).attr("href");
    href.push(something);
  });

  for (var i = 0; i < href.length; i++) {
    $.get(href[i], getCallBack);
  }
});
