import React, { Component } from 'react';

import { Consumer } from '../../Context';
import Contact from './Contact';

import Typography from '@material-ui/core/Typography';

class Contacts extends Component {

	render() {

		return (
			<Consumer>
				{value => {

					const { contacts } = value;

					return (
						<React.Fragment>
							<Typography style={{marginTop:'1.3em'}} variant="h5" component="h5">
							 	Contact List
							</Typography>
							{contacts.map( contact => (
								<Contact 
									key={contact.id}
									contact={contact}
								/>
							))}
						</React.Fragment>
					)
				}}
			</Consumer>
		)
	}
}

export default Contacts;