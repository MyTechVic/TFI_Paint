import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Login from './components/Login/Login';  
import Register from './components/Register/Register';	
import Dashboard from './components/Dashboard/Dashboard';	


class App extends Component {



  render() {
    return (
<Provider store = { store }>
	<div>
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/reg' component={Register}/> 
        <Route exact path='/Dashboard' component={Dashboard}/>
    </Switch>
	</div>
</Provider>
    );
  }
}

export default App;
