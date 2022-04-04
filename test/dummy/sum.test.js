
const sum = require('../../functions/dummy/sum');

test('should properly add numbers', () => {
    expect(sum(1, 2)).toBe(3);
 })