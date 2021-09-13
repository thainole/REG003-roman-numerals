#!/usr/bin/env node

const { parse, stringify } = require('../index');
const packageJson = require('../package.json');

const arg = process.argv;

const messageHelp = `
  Usage: roman-numerals [opttions] <command> [<input>]

  Commands:
    parse <input>      Parse a roman numeral string into an integer.
    stringify <input>  Takes an integer and converts it to a roman numeral.

  Options:
    -h,--help     Show this help.
    -v,--version  Show version number.
`;

switch (arg[2]) {
  case 'parse': console.log(parse(arg[3]));
    break;
  case 'stringify': console.log(stringify(parseInt(arg[3], 10)));
    break;
  case '--help': console.log(messageHelp);
    break;
  case '-h': console.log(messageHelp);
    break;
  case '--version': console.log(packageJson.version);
    break;
  case '-v': console.log(packageJson.version);
    break;
  default: console.log('Use --help to get further instructions');
    break;
}

// pa la consola: ./bin/cli.js
