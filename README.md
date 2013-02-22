javascript-showMe
=================

showMe is a function that makes JSON object to a human readable string.

typeOf is a function that checks the type of JSON object or return the name of the type.

getStr is a function that return a description string of JSON object by burning computer's memory.

getString is a function that retrun a description string of JSON object by burning computer's CPU.

=================
Example
=================
        showMe
=================

params
        "functionName": true(when object is a function only show its name and "function()");
        "maxDepth": 1(means only scan one level of the object 's elements, return a '...' to replace the deeper level's);
        "newWindow": true,(show message in a new Browser window)

showMe([{
        a: 'b'
	,b: 1
	,c: [function() {
		return 'e';
	}]
}]); === alert('[{a:"b",b:1,c:[function (){return \'e\';}]}]');

showMe([{
	a: 'b'
	,b: 1
	,c: [function() {
		return 'e';
	}]
}], {
	'functionNameOnly': true
	,'burning': 'CPU'
	,'newWindow': false
}); === alert('[{a:"b",b:1,c:[function()]}]');

showMe([{
	a: 'b'
	,b: 1
	,c: [function() {
		return 'e';
	}]
}], {
	functionNameOnly: false
	,maxDepth: 1
	,burning: 'CPU'
	,newWindow: true
}); === function() {
	win = window.open('', '', '');
	win.document.write('[{a:[object String],b:[object Number],c:[object Array]}]');
} ()

notice: if stack overflow please try to use burnig: 'CPU' ,and set the maxDepth low;

=================
