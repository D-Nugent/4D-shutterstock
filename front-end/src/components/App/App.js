import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import HomeV2 from '../../pages/HomeV2/HomeV2';
import BottomNav from '../BottomNavAlt/BottomNavAlt';
import ContentCreator from '../../pages/ContentCreator/ContentCreator'
import './App.scss';

class App extends React.Component {

  render() {
    return (
      <div className="app">
            <Switch>
            <Route exact path="/">
              <Redirect to="/contentCreator" />
            </Route>
                {/* <Route exact path="/" render={(routeProps) => <Home {...routeProps}/>}/> */}
                <Route path="/v2" render={(routeProps) => <HomeV2 {...routeProps}/>}/>
                <Route path="/contentCreator" render={(routeProps) => <ContentCreator {...routeProps}/>}/>
            </Switch>
          {/* <BottomNav/> */}
      </div>
    );
  }
}

export default App;
