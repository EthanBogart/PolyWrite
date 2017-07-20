'use es6';

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
      </div>
    );
  },
});
