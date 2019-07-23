import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import HomeContainer from './containers/HomeContainer';
import ListPostsContainer from './containers/ListPostsContainer';
import './App.css';

function Main() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="App">
      <Sidebar
        sidebar={<ListPostsContainer />}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button type="button" onClick={() => setSidebarOpen(true)}>
          Open sidebar
        </button>
        <HomeContainer />
      </Sidebar>
    </div>
  );
}

export default Main;
