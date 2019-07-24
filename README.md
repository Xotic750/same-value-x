<a href="https://travis-ci.org/Xotic750/same-value-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/same-value-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/same-value-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/same-value-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/same-value-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/same-value-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/same-value-x"
  title="npm version">
<img src="https://badge.fury.io/js/same-value-x.svg"
  alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/same-value-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/same-value-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

<a name="module_same-value-x"></a>

## same-value-x

Determines whether two values are the same value.

<a name="exp_module_same-value-x--module.exports"></a>

### `module.exports(value1, value2)` ⇒ <code>boolean</code> ⏏

This method is the comparison abstract operation SameValue(x, y), where x
and y are ECMAScript language values, produces true or false.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - A Boolean indicating whether or not the two arguments are
the same value.

| Param  | Type            | Description                  |
| ------ | --------------- | ---------------------------- |
| value1 | <code>\*</code> | The first value to compare.  |
| value2 | <code>\*</code> | The second value to compare. |

**Example**

```js
import sameValue from 'same-value-x';

console.log(sameValue(1, 1)); // true
console.log(sameValue(true, true)); // true
console.log(sameValue(NaN, NaN)); // true
console.log(sameValue(true, false)); // false
console.log(sameValue(0, -0)); // false
```
