var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

let obf = {

a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'

}

function print1337(html) {
  var textObf = "";
  for (var i = 0; i < html.length; i++){
    var k = 0;
    for (var key in obf) {
      if (html[i] === key) {
        textObf += obf[key];
        k = 1;
      }
    }
    if (k === 0) textObf += html[i];
  }
  console.log(textObf);
}

getHTML(requestOptions, print1337);
