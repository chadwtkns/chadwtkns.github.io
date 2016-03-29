$(document).ready(function(){
  // Create the XHR object.

  $( "#pdftest" ).click(function() {
    // makeCorsRequest();
    $.ajax({
         url: "https://pdfcrowd.com/url_to_pdf/?height=11in&use_print_media=1",
         type: "GET",
        //  complete: function(jqXhr,status) {
        //    console.log(jqXhr);
        //    console.log("Status " + status);
        //  },
         error: function(jqXhr, textStatus, error){
           console.log(jqXhr);
           console.log(textStatus);
           console.log(error);
         }
      });
  });
});
