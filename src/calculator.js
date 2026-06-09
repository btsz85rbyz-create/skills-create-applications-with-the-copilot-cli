/*
 * CLI Calculator - supported operations:
 *  - addition: add or +
 *  - subtraction: sub or -
 *  - multiplication: mul or *
 *  - division: div or /
 *
 * This module exports functions for each operation and performs basic input validation.
 */

function add(nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

function sub(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  return nums.slice(1).reduce((acc, n) => acc - n, nums[0]);
}

function mul(nums) {
  return nums.reduce((acc, n) => acc * n, 1);
}

function div(nums) {
  if (nums.length === 0) throw new Error('No operands provided');
  if (nums.length === 1) return nums[0];
  return nums.slice(1).reduce((acc, n) => {
    if (n === 0) throw new Error('Division by zero');
    return acc / n;
  }, nums[0]);
}

module.exports = {
  add,
  sub,
  mul,
  div,
};
