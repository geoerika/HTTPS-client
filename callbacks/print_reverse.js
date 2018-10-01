var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  console.log(html.split("").reverse().join(""));

  // var inputArray = html.split("");
  // inputArray.reverse();
  // console.log(inputArray.join(""));

};

getHTML(requestOptions, printReverse);