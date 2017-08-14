'use es6';

import * as fs from 'fs';
import * as path from 'path';
import assert from 'assert';

const DIFF_WASM = path.join(__dirname, '/../../cpp/a.out.wasm');
const diffBuf = fs.readFileSync(DIFF_WASM);

assert('WebAssembly' in global,
        'WebAssembly global object not detected');

// Convert node Buffer to Uint8Array
function toUint8Array(buf) {
  const u = new Uint8Array(buf.length);
  let i;
  for (i = 0; i < buf.length; ++i) {
    u[i] = buf[i];
  }
  return u;
}

function loadWebAssembly(filename, imports) {
  const buffer = toUint8Array(fs.readFileSync(filename));

  return WebAssembly.compile(buffer)
  .then((module) => {
    imports = imports || {};
    imports.env = imports.env || {};
    imports.env.memoryBase = imports.env.memoryBase || 0;
    imports.env.tableBase = imports.env.tableBase || 0;
    if (!imports.env.memory) {
      imports.env.memory = new WebAssembly.Memory({ initial: 256 });
    }
    if (!imports.env.table) {
      imports.env.table = new WebAssembly.Table({ initial: 0, element: 'anyfunc' });
    }

    console.log(buffer);

    return new WebAssembly.Instance(module, imports);
  });
}

export function diffInstance() {
  return loadWebAssembly(DIFF_WASM);
}
