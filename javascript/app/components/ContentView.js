import React from 'react';

const path = require('path');
const ffi = require('ffi');

const lib = ffi.Library(path.join(__dirname,
  '../../../rust/target/release/libfibonacci'),
  {
    fibonacci: ['int', ['int']],
  });

export default React.createClass({
  render() {
    return (
      <div className="content-view">
        According to Rust, the 20th fibonacci number is: {lib.fibonacci(20)}
      </div>
    );
  },
});
