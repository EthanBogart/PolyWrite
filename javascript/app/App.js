'use es6';

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentView from './components/ContentView';

export default React.createClass({
  render() {
    return (
      <div>
        <Sidebar />
        <Header />
        <ContentView />
      </div>
    );
  },
});
