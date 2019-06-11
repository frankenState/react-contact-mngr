import React, { Component } from 'react';

import { Consumer } from '../../Context';

import TextInputField from './TextInputField';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import Grid from '@material-ui/core/Grid';

class AddContact extends Component {

	state = {
		name: '',
		email: '',
		phone: '',
	}


	handleChange = input => e => {
		this.setState({ [input]: e.target.value });
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value});
	}

	saveContact = (dispatch, e) => {
		e.preventDefault();

		dispatch({ 
			type: 'ADD_CONTACT',
			payload: {
				id: (new Date()).getTime(),
				...this.state
			}
		});

		this.setState({
			name:"",
			email:"",
			phone:""
		});
	}

	render() {

		const { name, email, phone } = this.state;

		return (
			<Consumer>
				{ value => {
					
					const { dispatch } = value;

					return (
						<form onSubmit={this.saveContact.bind(this, dispatch)}>
							<Grid container spacing={0}>
								<Grid item xs={12}>
									<Typography style={{marginTop:'1.3em'}} variant="h5" component="h5">
									 	Add Contacts
									</Typography>
								</Grid>

								<Grid item xs={12}>
									<TextInputField 
										type="text"
										label="Enter the Name"
										onChange={this.handleChange}
										name="name"
										defaultValue={name}
									/>
								</Grid>
								
								<Grid item xs={12}>
									<TextInputField 
										type="email"
										label="Enter the Email Address"
										onChange={this.handleChange}
										name="email"
										defaultValue={email}
									/>
								</Grid>
								
								<Grid item xs={12}>
									<TextInputField 
										type="number"
										label="Enter the Phone Number"
										onChange={this.handleChange}
										name="phone"
										defaultValue={phone}
									/>
								</Grid>
								
								<Grid item xs={12}>
									<Fab
							          variant="extended"
							          size="medium"
							          color="primary"
							          aria-label="Add"
							          type="submit"
							        > <NavigationIcon/>
							        Save Contact
					        		</Fab>
								</Grid>
								
							</Grid>
						</form>
					)
				}}
			</Consumer>

			
		);
	}
}

export default AddContact;
