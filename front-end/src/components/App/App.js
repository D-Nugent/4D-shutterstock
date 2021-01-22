import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import HomeV2 from '../../pages/HomeV2/HomeV2';
import BottomNav from '../BottomNav/BottomNav';
import './App.scss';
import NavBar from '../NavBar/NavBar'

class App extends React.Component {

  render() {
    return (
      <div className="app">
          <div className="app__window">
          <NavBar></NavBar>
            <Switch>
                <Route exact path="/" render={(routeProps) => <Home {...routeProps}/>}/>
                <Route path="/v2" render={(routeProps) => <HomeV2 {...routeProps}/>}/>
            </Switch>
          <BottomNav/>
          </div>
      </div>
    );
  }
}

export default App;
