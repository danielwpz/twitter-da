var service = require('dwservice');
var imple = require('./implementation/implementation.js');

var test = service('./interface.json');

test.bind(imple);

test.start(8080, null);
