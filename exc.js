#! /usr/bin/env node
const path = require("path");
const flattener = require("./index.js");

flattener(process.argv.slice(2))