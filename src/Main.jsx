import React from 'react';
import Sidebar from 'react-sidebar';
import HomeContainer from './containers/HomeContainer';
import ListPostsContainer from './containers/ListPostsContainer';
import './App.css';

const mql = window.matchMedia('(min-width: 800px)');

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
    };
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    const { sidebarOpen, sidebarDocked } = this.state;
    return (
      <div className="App">
        <Sidebar
          sidebar={<ListPostsContainer />}
          open={sidebarOpen}
          docked={sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
        >
          {!sidebarDocked && (
            <button type="button" onClick={() => this.onSetSidebarOpen(true)}>
              Open sidebar
            </button>
          )}
          <HomeContainer />
        </Sidebar>

      </div>
    );
  }
}

export default Main;
