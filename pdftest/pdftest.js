$(document).ready(function(){
  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    if ("withCredentials" in xhr) {

      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      xhr.open(method, url, true);
      xhr.onload = function() {
       var responseText = xhr.responseText;
       console.log(responseText);
       // process the response.
      };

      xhr.onerror = function() {
        console.log('There was an error!');
      };

    } else if (typeof XDomainRequest != "undefined") {

      // Otherwise, check if XDomainRequest.
      // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
      xhr = new XDomainRequest();
      xhr.open(method, url);

    } else {

      // Otherwise, CORS is not supported by the browser.
      xhr = null;
      xhr.onload = function() {
       var responseText = xhr.responseText;
       console.log(responseText);
       // process the response.
      };

      xhr.onerror = function() {
        console.log('There was an error!');
      };
    }
    return xhr;
  }
  $( "#pdftest" ).click(function() {
    createCORSRequest('GET','http://pdfcrowd.com/url_to_pdf/?height=11in&use_print_media=1&footer_text=%u');
    // $.ajax({
    //      url: "http://pdfcrowd.com/url_to_pdf/?height=11in&use_print_media=1&footer_text=%u",
    //      type: "GET",
    //      success: function() { console.log('Success!'); }
    //   });
  });
});
