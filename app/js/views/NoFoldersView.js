import React from 'react';
import AddFolderButton from './../components/AddFolderButton';
import AddFileButton from './../components/AddFileButton';

const { PropTypes } = React;

export default React.createClass({
  PropTypes: {
    classNames: PropTypes.string,
  },

  render() {
    return (
      <div className="vertical-align-middle">
        <div>Hello there! Thank you for using PolyWrite</div>
        <div>To add a project folder and get going, click here:</div>
        <AddFolderButton
          text="Open a folder"
        />
        <AddFileButton
          text="Open a file"
        />
      </div>
    );
  },
});
