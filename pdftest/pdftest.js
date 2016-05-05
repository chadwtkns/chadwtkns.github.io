$(document).ready(function() {
  var href,something;
  $(".testLinks").each(function () {
      href = [];
      something = $(this).attr("href");
  });
  console.log(something);
  // for (var i = 0; i < href.length; i++) {
  //   $.get(href[i], function (data) {
  //     $(".onlyPrint").append(data);
  //   });
  // }
});
