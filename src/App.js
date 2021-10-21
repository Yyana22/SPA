import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter ,BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
    <Router>
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="app-wrapper-content">
        <div>
          <img src="https://pm1.narvii.com/6962/a5816f6da567392f2f0a13ef88b85c001cbfdbfar1-1000-200v2_hq.jpg" alt='img'></img>
        </div>
        <Switch>
        <Route path="/profile"
          component={() =>
            <Profile
              posts={props.state.profilePage}
              dispatch={props.dispatch}
              />
          } />
        <Route path="/dialogs" component={() => <Dialogs store={props.store}/>} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" Render={Settings} />
        </Switch>
      </div>
      <Footer />
    </div>
    </Router>
    </BrowserRouter>
  );
}

export default App;


// render or component?