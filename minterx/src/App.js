import React, { useState } from 'react';
import Sidenav from './components/sidenav/sidenav.component';
import Header from './components/header/header.component';

import './main.scss';

export const LangContext = React.createContext(null);

const App = () => {

  const [langs, setLangs] = useState([
    {
      id: 0,
      type: 'EN',
      selected: false,
      title: 'En'
    },
    {
      id: 1,
      type: 'RU',
      selected: true,
      title: 'Рус'
    }
  ]);

  return (
    <LangContext.Provider value={[langs, setLangs]}>
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
    </LangContext.Provider>
  );
}

export default App;
