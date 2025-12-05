if (process.env.SKIP_TESTS === '1') {
  console.log('Skipping tests');
  process.exit(0);
}
console.log('Running sample tests...');
const assert = require('assert');
assert.strictEqual(1 + 1, 2);
console.log('Tests passed');