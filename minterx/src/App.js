import React from 'react';
import Sidenav from './components/sidenav/sidenav.component';
import Header from './components/header/header.component';

import './main.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="content">
            <Sidenav />
            <div className="main-content">
              <Header />
              <main className="main">

              </main>
            </div>
          </div>
          <footer className="footer">

          </footer>
        </div>
      </div>
    );
  }
}

export default App;
