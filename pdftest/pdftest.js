$(document).ready(function(){
  // Create the XHR object.

  $( "#pdftest" ).click(function() {
    // makeCorsRequest();
    $.ajax({
         url: "https://pdfcrowd.com/url_to_pdf/?height=11in&use_print_media=1",
         type: "GET",
         success: function() { console.log('Success!'); }
      });
  });
});
