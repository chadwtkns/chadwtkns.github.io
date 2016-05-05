$(document).ready(function() {
  var href;
  function appendDataFun (data) {
     $(".onlyPrint").append(data);
   }
  $(".testLinks").each(function () {
      href = [];
      var something = href.push($(this).attr("href"));
  });
  console.log(something);
  for (var i = 0; i < href.length; i++) {
    $.get(href[i], appendDataFun(data));
  }
});
