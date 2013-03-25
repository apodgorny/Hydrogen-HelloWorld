
var H = require('./H');

H.require(
	'packages/HelloWorld'
);

var oHelloWorld = H.HelloWorld.construct({
	helloProperty: 'foo'
});
oHelloWorld.helloProperty = 'bar';
oHelloWorld.destruct();