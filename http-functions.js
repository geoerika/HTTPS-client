var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options, function(response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    var dataToPrint = "";
    response.on('data', function(data) {
      dataToPrint += data;
      callback(dataToPrint);
    });

    // the callback is invoked when all of the writable data has been received
    response.on('finish', function() {
      console.log('Response writable chunks finished.');
    });
  });
};


function printHTML (html) {
  console.log(html);
};
