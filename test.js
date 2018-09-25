var Queue = function() {
	var functionSet=(function() {
		var _elements=[]; // creating a private array
		return [
		// push function
		function()
		{ return _elements.push .apply(_elements,arguments); },
		// shift function
		function()
		{ return _elements.shift .apply(_elements,arguments); },
		function() { return _elements.length; },
		function(n) { return _elements.length=n; }];
	})();
	this.push=functionSet[0];
	this.shift=functionSet[1];
	Object.defineProperty(this,'length',{
		'get':functionSet[2],
		'set':functionSet[3],
		'writeable':true,
		'enumerable':false,
		'configurable':false
	});
	// initializing the queue with given arguments
	this.push.apply(this,arguments);
};

var q=new Queue(0,1), e;
q.push(2);
console.log(q.length); // 3
while(undefined!==(e=q.shift()))
console.log(e); // 0, 1, 2 