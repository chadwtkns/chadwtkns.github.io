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
  // function BuildPDFCrowdLinks () {
	// var href = [];
  //
	// $(".testLinks").each(function () {
	// 	href.push($(this).attr("href"));
	// 	var testIdea = $('<div class="visible-print-block"></div>');
	// 	$("#onlyPrint").append(testIdea);
	// 	for (var i = 0; i < href.length; i++) {
	// 		$(".visible-print-block").load(href[i] + " #printDiv");
	// 	}
	// });
	// CallPDFCrowd();
  // }
  // function CallPDFCrowd () {
  // 	document.getElementById('listTopicPDFCrowd').click();
  // }
  // $("#pdftest").off("click").on("click", ".dnldButtton", BuildPDFCrowdLinks);
});
