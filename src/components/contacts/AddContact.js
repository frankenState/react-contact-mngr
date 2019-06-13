import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../actions/contactActions';

import TextInputField from './TextInputField';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

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

	saveContact = (e) => {
		e.preventDefault();

		this.props.addContact({
			...this.state
		});

		this.setState({
			name :"",
			email:"",
			phone:""
		});

		this.props.history.push('/');
	}

	render() {

		const { name, email, phone } = this.state;

		return (
			<form onSubmit={this.saveContact}>
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
	}
}

AddContact.propTypes = {
	addContact: PropTypes.func.isRequired
}

export default connect(
	null,
	{addContact}
)(AddContact);
