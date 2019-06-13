import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';



import Container from '@material-ui/core/Container';

import Header from './components/layout/Header';
import About from './components/pages/About';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import NotFound from './components/NotFound';

import { Provider } from 'react-redux';
import store from './store';


function App() {



  return (
	<Provider store={store}>
    	<Router>
    	<div className="App">
	      <Header />
	      
	      <Container maxWidth="sm">
	      	<Switch>
	      		<Route exact path="/" component={Contacts} />
	      		<Route exact path="/contact/add" component={AddContact} />
	      		<Route exact path="/contact/edit/:id" component={EditContact} />
	      		<Route exact path="/about" component={About} />
	      		<Route component={NotFound} />
	      	</Switch>
	      </Container>
	    </div>
	    </Router>
	</Provider>
  );
}

export default App;
