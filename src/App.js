import React from 'react';
import './App.css';


import { Provider } from './Context';

import Container from '@material-ui/core/Container';

import Header from './components/Header';
import Contacts from './components/Contacts';

function App() {
  return (
    <Provider>
    	<div className="App">
	      <Header />
	      
	      <Container maxWidth="sm">
	      	<Contacts/>
	      </Container>
	    </div>
    </Provider>
  );
}

export default App;
