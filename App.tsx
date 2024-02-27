import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import './components/normalize.css';
import Marketplace from './components/Marketplace/Marketplace';
import Rankings from './components/Rankings/Rankings';
import SignUp from './components/SignUp/SignUp';
import Connect from './components/Connect/Connect';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Marketplace" component={Marketplace}/>
          <Route exact path="/Ranking" component={Rankings}></Route>
          <Route exact path="/SignUp" component={SignUp}></Route>
          <Route exact path="/Connect" component={Connect}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
