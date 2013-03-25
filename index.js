
var H = require('./H');

H.require(
	'packages/HelloWorld'
);

var oHelloWorld = H.HelloWorld.construct();
oHelloWorld.helloProperty = 'bar';
oHelloWorld.destruct();