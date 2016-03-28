$(document).ready(function(){
  $( "#pdftest" ).click(function() {
    $.ajax({
         url: "http://pdfcrowd.com/url_to_pdf/?height=11in&use_print_media=1&footer_text=%u",
         type: "GET",
         success: function() { console.log('Success!'); }
      });
  });
});
