// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { isYes } from '../utils.js';

const test = QUnit.test;

test('yes will return true', (expect) => {
    const expected = true;
    const actual = isYes('yes');
    expect.equal(actual, expected);

});

test('Yes will return true', (expect) => {
    const expected = true;
    const actual = isYes('Yes');
    expect.equal(actual, expected);

});