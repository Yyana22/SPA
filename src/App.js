import React from 'react';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
	return (
		<BrowserRouter>
			<Router>
				<div className="app-wrapper">
					<Header />
					<Sidebar />
					<div className="app-wrapper-content">
						<div>
							<img src="../img/sea.jpg" alt='img'></img>
						</div>
						<Switch>
							<Route path="/profile"
								render={() =>
									<Profile />
								} />
							<Route path="/dialogs"
								render={() =>
									<DialogsContainer />
								} />
							<Route path="/users"
								render={() =>
									<UsersContainer />}
							/>
							<Route path="/news" render={News} />
							<Route path="/music" render={Music} />
							<Route path="/settings" render={Settings} />
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