/*
 * get object string by burning CPU
 */
if (!getString) {
	var getString = function(obj) {
		var arguments1 = arguments[1],
			result = {
				'string': '',
				'hasChild': true,
				'child': obj
			},
			pathArray = [0],
			typeValue = typeOf(obj);
		/*arguments[1] = arguments[1] || {};//Bad assignment;*/
		arguments1 = arguments1 || {};
		if (typeOf(arguments1, 'String')) {
			var argumentsObj = {};
			argumentsObj[arguments1] = true;
			/*arguments[1] = argumentsObj;//Bad assignment;*/
			arguments1 = argumentsObj;
		}
		var command = arguments1 || {};
		var currentLevel = 0;
		do {
			var length = pathArray.length;
			arguments1['pathLevel'] = currentLevel;
			arguments1['pathNo'] = pathArray[currentLevel];
			var rs = analyseTarget(result['child'], arguments1) || {};
			result['hasChild'] = rs['hasChild'];
			result['child'] = rs['child'];
			if (currentLevel == length - 1) { // while digging deeper
				result['string'] = result['string'] + rs['string'];
				//alert(result['string'] + '\n\rlength: ' + length + '\n\rcurrentLevel: ' + currentLevel);
				if (rs['hasChild']) {
					pathArray[length] = 0;
					currentLevel++;
				} else { // reach the end, go back to the top to refind the parent obj.
					result['child'] = obj;
					currentLevel = 0;
					if (length > 1) {
						pathArray.pop();
						var index = pathArray.length - 1;
						pathArray[index] = pathArray[index] + 1;
					} else {
						break;
					}
				}
			} else { // while refinding the deepest obj.
				currentLevel++;
			}
		} while (true);
		return result['string'];
	};
}
/**
 * for "getting string by burning CPU", return piece of result string and
 * state(true/false:keep diging or not)
 */
if (!analyseTarget) {
	var analyseTarget = function(obj) {
		// preparing
		var arguments1 = arguments[1],
			rs = {
				'string': '',
				'hasChild': false,
				'child': null
			},
			typeValue = typeOf(obj),
			noFunction = arguments1.noFunction;
		if (noFunction && typeValue == 'Function') {
			return rs;
		}
		/*arguments[1] = arguments[1] || undefined;//Bad assignment;*/
		arguments1 = arguments1 || undefined;
		if (typeOf(arguments1, 'String')) {
			var argumentsObj = {};
			argumentsObj[arguments1] = true;
			/*arguments[1] = argumentsObj; //Bad assignment;*/
			arguments1 = argumentsObj;
		}
		/*arguments[1] = arguments[1] || {};//Bad assignment;*/
		arguments1 = arguments1 || {};
		var pathLevel = arguments1.pathLevel = arguments1.pathLevel || 1;
		var maxDepth = arguments1.maxDepth;
		if (typeOf(maxDepth, 'number') && pathLevel++ > maxDepth) {
			rs['string'] = '[object ' + typeValue + ']';
			return rs;
		}
		var command = arguments1 || {};
		var pathNo = command.pathNo || 0;
		var quoteStyle = arguments1.quoteStyle || '"';
		var escapeCharacter = arguments1.escapeCharacter || [];
		// start
		switch (typeValue) {
			case 'String':
				rs['string'] = quoteStyle + characterEscape(String(obj), escapeCharacter.concat([quoteStyle])) + quoteStyle;
				rs['hasChild'] = false;
				rs['child'] = null;
				break;
			case 'Array':
				var length = obj.length;
				if (length < 1) {
					rs['string'] = '[]';
					rs['hasChild'] = false;
					rs['child'] = null;
					break;
				}
				if (pathNo < length) {
					if (pathNo === 0) {
						rs['string'] = '[';
					} else if (pathNo > 0) {
						rs['string'] = ',';
					}
					rs['hasChild'] = true;
					rs['child'] = obj[pathNo];
				} else if (pathNo == length) {
					//if(pathNo == 0){ rs['string'] = '['; }// this situation is already inclued in condition of "if(length<1)"
					rs['string'] = ']';
					rs['hasChild'] = false;
					rs['child'] = null;
				}
				break;
			case 'Error':
			case 'Object':
				var count = -1;
				try {
					for (var prop in obj) { // when count is equal pathNo, we get the child and continue, if count is larger than pathNo, then we will know this is not the last child.
						count++;
						if (count < pathNo) {} else if (count == pathNo) {
							if (pathNo === 0) {
								rs['string'] = '{';
							} else if (pathNo > 0) {
								rs['string'] = ',';
							}
							rs['string'] = rs['string'] + quoteStyle + characterEscape(prop, escapeCharacter.concat([quoteStyle])) + quoteStyle + ':';
							rs['hasChild'] = true;
							rs['child'] = obj[prop];
						} else if (count > pathNo) {
							break;
						}
					}
				} catch (e) {
					if (!jQuery.isPlainObject(obj)) {
						rs['string'] = 'object';
						rs['hasChild'] = false;
						rs['child'] = null;
						break;
					}
				}
				if (!rs['hasChild'] && count == -1) { // obj does not have a child at all.
					rs['string'] = '{}';
				} else if (!rs['hasChild'] && count < pathNo) { // rs['child'] == obj last child
					rs['string'] += '}';
				}
				break;
			case 'Number':
				rs['string'] = obj;
				rs['hasChild'] = false;
				rs['child'] = null;
				break;
			case 'Function':
				if (command == 'functionNameOnly' || command.functionNameOnly) {
					rs['string'] = 'function()';
				} else {
					rs['string'] = String(obj);
				}
				rs['hasChild'] = false;
				rs['child'] = null;
				break;
			case 'Boolean':
				rs['string'] = String(obj);
				break;
			case 'RegExp':
				rs['string'] = String(obj);
				break;
			case 'Date':
				rs['string'] = obj.toSource();
				break;
			default:
				rs['string'] = '[object ' + typeValue + ']';
				break;
		}
		return rs;
	};
}
