$(document).ready(function() {
  var href,something;
  function appendDataFun (data) {
     $(".onlyPrint").append(data);
   }
  $(".testLinks").each(function () {
      href = [];
      something = href.push($(this).attr("href"));
  });
  console.log(something);
  for (var i = 0; i < href.length; i++) {
    $.get(href[i], appendDataFun(data));
  }
});
