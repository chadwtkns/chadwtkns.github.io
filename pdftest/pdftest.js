$( document ).ready(function() {
  var href = [];
  function appendDataFun (data) {
     $(".onlyPrint").append(data);
   }
  $(".testLinks").each(function () {
      href = href.push($(this).attr("href"));
  });
  for (var i = 0; i < href.length; i++) {
    $.get(href[i], appendDataFun(data));
  }


});
