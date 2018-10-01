
var https = require('https');

function getHTML (options, callback) {

  https.get(options, function(response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    var dataToPrint = "";
    response.on('data', function(data) {
      dataToPrint += data;
      callback(printHTML(dataToPrint));
    });

    // the callback is invoked when all of the writable data has been received
    response.on('finish', function() {
      console.log('Response writable chuncks finished.');
    });
   });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML);