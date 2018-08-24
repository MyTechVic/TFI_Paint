import React, { Component } from 'react';
import { Link, Route, Switch, Router } from 'react-router-dom';
import './App.css';
import Search from './components/Search/Search'	
import Login from './components/Login/Login'	
import UserInput from './components/UserInput/UserInput'
import Navigation from './components/Nav/Nav'

class App extends Component {



  render() {
    return (
	<div>
    <Switch>
        <Route exact path='/login' component={Login}/>
    </Switch>
		<div className="App">
			<Navigation />
			<Search />
			<UserInput />
		</div>
		

	</div>
    );
  }
}

export default App;
