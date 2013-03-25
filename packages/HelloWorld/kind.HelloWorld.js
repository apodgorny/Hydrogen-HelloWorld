H.kind({
	name: 'HelloWorld',
	
	helloProperty: 'nada',
	
	onConstruct: function(oSender, oEvent) {
		console.log('Constructing', oSender.name);
	},
	
	onDestruct: function(oSender, oEvent) {
		console.log('Destructing', oSender.name);
	},
	
	onChange: function(oSender, oEvent) {
		console.log('Changed property ', oEvent.property, 'from "' +  oEvent.oldValue + '" to "' + oEvent.newValue + '" in', oSender.name, 'with id=' + oSender.id);
	}	
});

console.log('kind.HelloWorld.js is loaded');