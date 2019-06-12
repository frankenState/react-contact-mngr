import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


import { Provider } from './Context';

import Container from '@material-ui/core/Container';

import Header from './components/layout/Header';
import About from './components/pages/About';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import NotFound from './components/NotFound';

import Test from './components/Test/Test';

function App() {
  return (
    <Provider>
    	<Router>
    	<div className="App">
	      <Header />
	      
	      <Container maxWidth="sm">
	      	<Switch>
	      		<Route exact path="/" component={Contacts} />
	      		<Route exact path="/contact/add" component={AddContact} />
	      		<Route exact path="/contact/edit/:id" component={EditContact} />
	      		<Route exact path="/about" component={About} />
	      		<Route exact path="/test" component={Test} />
	      		<Route component={NotFound} />
	      	</Switch>
	      </Container>
	    </div>
	    </Router>
    </Provider>
  );
}

export default App;
