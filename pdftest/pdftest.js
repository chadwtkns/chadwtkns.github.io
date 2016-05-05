$(document).ready(function() {
  var href = [];
  var something;
  $(".testLinks").each(function () {
      something = $(this).attr("href");
      href.push(something);
  });
  console.log(something);
  // for (var i = 0; i < href.length; i++) {
  //   $.get(href[i], function (data) {
  //     $(".onlyPrint").append(data);
  //   });
  // }
});
