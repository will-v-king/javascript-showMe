/*
     *
     * paam "functionName":true(when object is a function only show its name and
     * "function()"); "maxDepth":1(means only scan one level of the object's
     * elements, return a '...' to replace the deeper level's);
     * "newWindow":true,(show message in a new Browser window)
     *
     * showMe([{a:'b',b:1,c:[function(){return 'e';}]}]);
     * showMe([{a:'b',b:1,c:[function(){return 'e';}]}],
     * {'functionNameOnly':true, 'burning':'CPU','newWindow':false});
     * showMe([{a:'b',b:1,c:[function(){return
     * 'e';}]}],{functionNameOnly:false,
     * maxDepth:1,burning:'CPU',newWindow:true}); notice: if stack overflow
     * please try to use burnig:'CPU', and set the maxDepth low;
     */
var g_showMe = g_showMe || true;
if (!showMe) {
  var showMe = function(obj) {
		var allShowMe = true; // 全局开关 // global switch, which can turn showMe off with value false.
		if (allShowMe && g_showMe) {
			arguments[1] = arguments[1] || {};
			arguments[1]['burning'] = arguments[1]['burning'] || undefined;
			var newWindow = arguments[1]['newWindow'] || undefined;
			function openWin(str) {
				myWindow = window.open('', '', '');
				if (myWindow) {
					myWindow.document.write(str);
					myWindow.focus();
				}
			}
			function popup(str) {
				if (newWindow) {
					openWin(str);
				} else {
					alert(str);
				}
			}
			if (arguments[1] == 'alert') {
				popup(obj);
			} else if (typeOf(arguments[1], 'object')) {
				if (arguments[1]['burning'] == 'CPU') {
					popup(getString(obj, arguments[1]));
				} else {
					popup(getStr(obj, arguments[1]));
				}
			}
		}
	};
}

