'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(s) {return s.slice(0, 2)}
function keepLast(s) {return s.slice(-2)}
function keepFirstLast(s) {return keepFirst(s.slice(2))}

//* Begin of tests
const assert = require('assert');


assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(keepFirst.length, 1);
assert.deepStrictEqual(keepFirst('abcde'), 'ab');

assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(keepLast.length, 1);
assert.deepStrictEqual(keepLast('abcde'), 'de');

assert.strictEqual(typeof keepFirstLast, 'function');
assert.strictEqual(keepFirstLast.length, 1);
assert.deepStrictEqual(keepFirstLast('abcde'), 'cd');
// assert.fail('You must write your own tests');
// End of tests */
