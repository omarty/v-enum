# v-enum

**v-enum** the data type whose set of values is a limited list of identifiers.

## Install

```
npm install omarty/v-enum
```

## Parameters

* `enumType` { string } - The name of the enumeration type.
* `enumArgs` { Array } - An array of enumerators.

## Functions

### getName (enum, enumValue) `[static]`
Get the name of the enumerator by value.
* `enum` { VEnum } - An instance of the enumeration from which to receive a name.
* `enumValue` { number } - The value of the enumerator.
* `Returns` { string } - Returns the name of the enumerator.

### getNames (enum) `[static]`
Get all the names of the enumerators in the enumeration.
* `enum` { VEnum } - An instance of the enumeration from which you want to get all the names.
* `Returns` { string } - Returns an array of all names of the enumerator.

### getNamesByValue (enum) `[static]`
Get all the names by value of the enumerators in the enumeration.
* `enum` { VEnum } - An instance of the enumeration from which you want to get all the names.
* `Returns` { Array } Returns an array of all names by value of the enumerator.

## Example of use

```javascript
// By default, the first enumerator has the value 0, and the value of each successive enumerator is increased by 1.
// apple - 0, orange - 1, pear - 2, etc.
var fruitsEnum = new VEnum ("fruits", [
	"apple",
	"orange",
	"pear",
	"cucumber",
	"banana",
]);

// Enumerations can use initializers to override the default values, as shown in the following example.
// In this case is a sequence of elements start at 0, but since the enumerator cucumber sequence continues with 7.
var fruitsEnum = new VEnum ("fruits", [
	"apple",
	"orange",
	"pear",
	[ "cucumber", 7 ],
	"banana",
]);

console.log(VEnum.getNames(fruitsEnum));
// [ 'apple', 'orange', 'pear', 'cucumber', 'banana' ]

console.log(VEnum.getNamesByValue(fruitsEnum));
// [ 'apple', 'orange', 'pear', <4 empty items>, 'cucumber', 'banana' ]
```
