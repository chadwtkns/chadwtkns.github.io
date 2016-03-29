$(document).ready(function(){
  // Create the XHR object.

  $( "#pdftest" ).click(function() {
    // makeCorsRequest();
    $.ajax({
         url: "http://pdfcrowd.com/url_to_pdf/?height=11in&use_print_media=1&footer_text=%u",
         beforeSend: function (request)
            {
                request.setRequestHeader("Referer", 'https://chadwtkns.github.io/pdftest/pdftest.html');
            },
         type: "GET",
         success: function() { console.log('Success!'); }
      });
  });
});
