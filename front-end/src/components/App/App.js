import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import BottomNav from '../BottomNav/BottomNav';
import './App.scss';

class App extends React.Component {

  render() {
    return (
      <div className="app">
          <div className="app__window">
            <Switch>
                <Route exact path="/" render={(routeProps) => <Home {...routeProps}/>}/>
            </Switch>
          <BottomNav/>
          </div>
      </div>
    );
  }
}

export default App;
