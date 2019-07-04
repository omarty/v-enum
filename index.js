"use strict";

module.exports = VEnum;

const sNames = Symbol("enumNames");
const sNamesByValue = Symbol("enumNamesByValue");

/**
 * VEnum - the type that consists of a set of named constants called enumerators list.
 * @constructor
 * @param {string} enumType - The name of the enumeration type.
 * @param {Array} enumArgs - An array of enumerators.
 */
function VEnum(enumType, enumArgs)
{
	this[sNames] = [];
	this[sNamesByValue] = [];

	for (var i = 0, enumValue = 0; i < enumArgs.length; i++, enumValue++) {
		var enumArg = enumArgs[i];
		var enumName;

		if (Array.isArray(enumArg) == true) {
			if (typeof enumArg[1] != "number") {
				throw new Error("The enumerator number must be of the type 'number'");
			}
			enumName = enumArg[0];
			enumValue = enumArg[1];
		}
		else if (typeof enumArg == "string") {
			enumName = enumArg;
		}
		else if (enumArg == undefined) {
			enumName = enumArg;
		}
		else {
			throw new Error("Invalid argument of VEnum.");
		}

		if (enumName) {
			this[sNamesByValue][enumValue] = enumName;
			this[sNames].push(enumName);
		}
		else {
			continue;
		}

		Object.defineProperty(this, enumName, {
			value: enumValue, writable: false, enumerable: false, configurable: false,
		});
	}
}

/**
 * Get the name of the enumerator by value.
 * @static
 * @param {VEnum} _enum - An instance of the enumeration from which to receive a name.
 * @param {number} enumValue - The value of the enumerator.
 * @returns {string} Returns the name of the enumerator.
 */
VEnum.getName = function(_enum, enumValue) {
	return _enum[sNamesByValue][enumValue];
}

/**
 * Get all the names of the enumerators in the enumeration.
 * @static
 * @param {VEnum} _enum - An instance of the enumeration from which you want to get all the names.
 * @returns {Array} Returns an array of all names of the enumerator.
 */
VEnum.getNames = function(_enum) {
	return _enum[sNames];
}

/**
 * Get all the names by value of the enumerators in the enumeration.
 * @static
 * @param {*} _enum
 * @returns {Array} Returns an array of all names by value of the enumerator.
 */
VEnum.getNamesByValue = function(_enum) {
	return _enum[sNamesByValue];
}


