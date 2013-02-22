/*
     * typeOf({},['object','string']) == true;
     *
     * typeOf({},'object) == true;
     *
     * typeOf({}) == 'Object'
     *
     * typeOf(null, 'Object') == false;
     *
     * typeOf(function(){},'function') == true;
     *
     * typeOf(undefined, 'undefined') == true;
     *
     * typeOf(null,'null') == true;
     *
     * typeOf() == 'undefined';
     *
     * typeOf(NaN) == 'NaN';
     */
if (!typeOf) {
        var typeOf = function(obj, type) {
		/*
	 * if (obj == undefined || obj == null) { if (type == undefined || type ==
	 * null) { return true; } else { return false; } }
	 */
		var clas;
		if (obj === undefined) {
			clas = 'Undefined';
		} else if (obj === null) {
			clas = 'Null';
		} else {
			clas = Object.prototype.toString.call(obj).slice(8, - 1);
			if (clas.toLowerCase() == 'number' && isNaN(obj)) {
				clas = 'NaN';
			}
		}
		// 分析type的类型
		if (type != undefined && type != null) {
			if (typeOf(type) == 'Array') {
				var length = type.length;
				while (length-- > 0) {
					if (typeOf(type[length], 'String') && clas.toLowerCase() == type[length].toLowerCase()) {
						clas = true;
						break;
					}
				}
				delete length;
			} else if (typeOf(type) == 'String') {
				clas = clas.toLowerCase() == type.toLowerCase();
			}
		}
		return clas;
		delete clas;
		delete arguments;
		/**/
	};
}

