// while https is built-in to Node, it is a module, so it must be required
var https = require('https');

// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function(data) {
      console.log('Chunk Received. Length: ', data.length + '\n');
      console.log(data.toString() + '\n');
    });

    // the callback is invoked when all of the writable data has been received
    response.on('finish', function() {
      console.log('Response writable chuncks finished.');
    });
  });
}

// console.log(getAndPrintHTMLChunks());