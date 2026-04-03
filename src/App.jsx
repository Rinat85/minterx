import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Sidenav from './components/sidenav/sidenav.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import Exchange from './pages/exchange/exchange.component';
import RateReserv from './pages/rate-reserv/rate-reserv.component';
import Deals from './pages/deals/deals.component';
import Reviews from './pages/reviews/reviews.component';
import Bonuses from './pages/bonuses/bonuses.component';
import Affiliate from './pages/affiliate/affiliate.component';
import About from './pages/about/about.component';

import './main.scss';

export const LangContext = React.createContext(null);

const App = () => {

  const langs = [
    {
      id: 0,
      type: 'EN',
      title: 'En'
    },
    {
      id: 1,
      type: 'RU',
      title: 'Рус'
    }
  ];

  const [ lang, setLang ] = useState(langs[0]);

  return (
    <Router>
      <LangContext.Provider value={[lang, setLang, langs]}>
        <div className="app">
          <div className="container">
            <div className="content">
              <Sidenav />
              <div className="main-content">
                <Header />
                <main className="main">
                  <Switch>
                    <Route exact path="/" component={Exchange} />
                    <Route exact path="/rate-reserv" component={RateReserv} />
                    <Route exact path="/deals" component={Deals} />
                    <Route exact path="/reviews" component={Reviews} />
                    <Route exact path="/bonuses" component={Bonuses} />
                    <Route exact path="/affiliate" component={Affiliate} />
                    <Route exact path="/about" component={About} />
                  </Switch>
                </main>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </LangContext.Provider>
    </Router>
  );
}

export default App;
