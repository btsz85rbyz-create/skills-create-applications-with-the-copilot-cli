#!/usr/bin/env node
/*
 * Node.js CLI Calculator (src/index.js)
 * Supports the following operations:
 *  - addition: add or +
 *  - subtraction: sub or -
 *  - multiplication: mul or *
 *  - division: div or /
 *
 * Usage examples:
 *  node src/index.js add 2 3
 *  node src/index.js + 2 3
 *  node src/index.js mul 2 3 4
 *  node src/index.js div 10 2
 */

const { add, sub, mul, div } = require('./calculator');

function printHelp() {
  console.log('Usage: node src/index.js <operation> <num1> [num2 ...]');
  console.log('Operations: add (+), sub (-), mul (*), div (/)');
  console.log('Examples:');
  console.log('  node src/index.js add 2 3');
  console.log('  node src/index.js * 2 3 4');
}

function parseNumbers(args) {
  const nums = args.map(a => {
    const n = Number(a);
    if (Number.isNaN(n)) {
      throw new Error(`Invalid number: ${a}`);
    }
    return n;
  });
  return nums;
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.length === 0 || argv.includes('--help') || argv.includes('-h')) {
    printHelp();
    process.exit(0);
  }

  const op = argv[0].toLowerCase();
  const operands = argv.slice(1);
  if (operands.length === 0) {
    console.error('Error: at least one operand is required');
    printHelp();
    process.exit(1);
  }

  let nums;
  try {
    nums = parseNumbers(operands);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }

  try {
    let result;
    switch (op) {
      case 'add':
      case '+':
        result = add(nums);
        break;
      case 'sub':
      case '-':
        result = sub(nums);
        break;
      case 'mul':
      case '*':
        result = mul(nums);
        break;
      case 'div':
      case '/':
        result = div(nums);
        break;
      default:
        console.error(`Unknown operation: ${op}`);
        printHelp();
        process.exit(1);
    }

    // Print result (use default formatting for floats)
    console.log(result);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

main();
