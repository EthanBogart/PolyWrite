import React from 'react';

const path = require('path');
const ffi = require('ffi');
debugger;
const lib = ffi.Library(path.join(__dirname,
  '../../../rust/target/release/libfibonacci'),
  {
    fibonacci: ['int', ['int']],
  });

export default React.createClass({
  render() {
    return (
      <div className="app-header">{lib.fibonacci(20)}</div>
    );
  },
});
