import React from 'react';
import './App.css';


import { Provider } from './Context';

import Container from '@material-ui/core/Container';

import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';

function App() {
  return (
    <Provider>
    	<div className="App">
	      <Header />
	      
	      <Container maxWidth="sm">
	      	<AddContact/>
	      	<Contacts/>
	      </Container>
	    </div>
    </Provider>
  );
}

export default App;
