// 将字符串 数组 对象 以字符串的形式返回。// return a string, which describe the json object that passed in.
if (!getStr) {
	var getStr = function(obj) {
		var str = '';
		if (typeOf(arguments[1], 'String')) {
			var argumentsObj = {};
			argumentsObj[arguments[1]] = true;
			arguments[1] = argumentsObj;
		}
		arguments[1] = arguments[1] || {};
		var getStrLevel = arguments[1].getStrLevel = arguments[1].getStrLevel || 1;
		var maxDepth = arguments[1].maxDepth;
		if (typeOf(maxDepth, 'number') && getStrLevel++ > maxDepth) {
			return '...';
		}
		var command = arguments[1] || {};
		var typeValue = typeOf(obj);
		switch (typeValue) {
			case 'String':
				str = str + '"' + String(obj) + '"';
				break;
			case 'Array':
				var length = obj.length;
				str = str + '[';
				for (var i = 0; i < length; i++) {
					str = str + getStr(obj[i], arguments[1]) + ',';
				}
				var lio = str.lastIndexOf(',');
				lio = lio == -1 ? str.length : lio;
				str = str.substring(0, lio) + ']';
				delete lio;
				delete length;
				break;
			case 'Error':
			case 'Object':
				str = str + '{';
				try {
					for (var prop in obj) {
						str = str + '"' + prop + '"' + ':' + getStr(obj[prop], arguments[1]) + ',';
					}
				} catch (e) {
					if (!jQuery.isPlainObject(obj)) {
						str = str + 'object';
						break;
					}
				}
				var lio = str.lastIndexOf(',');
				lio = lio == -1 ? str.length : lio;
				str = str.substring(0, lio) + '}';
				delete lio;
				delete prop;
				break;
			case 'Number':
				str = str + obj;
				break;
			case 'Function':
				if (command == 'functionNameOnly' || command.functionNameOnly) {
					str = str + 'function()';
				} else {
					str = str + String(obj);
				}
				break;
			case 'Boolean':
				str = str + String(obj);
				break;
			case 'RegExp':
				str = str + String(obj);
				break;
			case 'Date':
				str = str + (obj.toSource === undefined ? obj.toString() : obj.toSource());
				break;
			default:
				str = str + '[object ' + typeValue + ']';
				break;
		}
		delete typeValue;
		delete command;
		delete arguments;
		return str;
		delete str;
	};
}
