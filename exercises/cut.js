'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(s) { return s.slice(2)}
function cutLast(s) { return s.slice(0, -2)}
function cutFirstLast(s) {return cutFirst(cutLast(s))}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(cutFirst.length, 1);
assert.deepStrictEqual(cutFirst('abcde'), 'cde');

assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(cutLast.length, 1);
assert.deepStrictEqual(cutLast('abcde'), 'abc');

assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(cutFirstLast.length, 1);
assert.deepStrictEqual(cutFirstLast('abcde'), 'c');
// assert.fail('You must write your own tests');
// End of tests */
