'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
function jadenCase(s) {
    return s.split(" ").map(elm => elm[0].toUpperCase() + elm.slice(1)).join(" ")
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase.length, 1);
assert.deepStrictEqual(jadenCase("How are you ?"), "How Are You ?");
// assert.fail('You must write your own tests');
// End of tests */
