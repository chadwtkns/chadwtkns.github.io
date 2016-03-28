$(document).ready(function(){
  $( "#pdftest" ).click(function() {
    $.ajax({
         url: "http://pdfcrowd.com/url_to_pdf/?height=11in&use_print_media=1&footer_text=%u",
         data: { signature: authHeader },
         type: GET,
         beforeSend: function(xhr){xhr.setRequestHeader('Referer', 'http://http://chadwtkns.github.io/pdftest/pdftest.html');},
         success: function() { console.log('Success!'); }
      });
  });
});
