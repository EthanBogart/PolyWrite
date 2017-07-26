import React from 'react';
import NoFoldersView from '../components/views/NoFoldersView';


// const path = require('path');
// const ffi = require('ffi');
//
// const lib = ffi.Library(path.join(__dirname,
//   '../../../app/rust/target/release/libfibonacci'),
//   {
//     fibonacci: ['int', ['int']],
//   });
// According to Rust, the 20th fibonacci number is: {lib.fibonacci(20)}

export default React.createClass({
  renderNoFolders() {
    return <NoFoldersView />;
  },

  render() {
    return (
      <div className="content-view-container">
        {this.renderNoFolders()}
      </div>
    );
  },
});
