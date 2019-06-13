import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactActions';


import TextInputField from './TextInputField';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class EditContact extends Component {

	state = {
		id:'',
		name: '',
		email: '',
		phone: '',
	}

	componentDidUpdate(){
		if (this.state.name.length === 0 && this.props.contact.name.length !== 0){
			this.setState({...this.props.contact});
		}
		return;
	}

	componentDidMount(){
		const { id } = this.props.match.params;

		this.props.getContact(id);

	}

	handleChange = input => e => {
		this.setState({ [input]: e.target.value });
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value});
	}

	saveContact = (e) => {
		e.preventDefault();
		
		const { id } = this.props.match.params;
		
		this.props.updateContact({...this.state});

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
						 	Update Contacts
						</Typography>
					</Grid>

					<Grid item xs={12}>
						<TextInputField 
							type="text"
							label="Update the Name"
							onChange={this.handleChange}
							name="name"
							defaultValue={name}
						/>
					</Grid>
					
					<Grid item xs={12}>
						<TextInputField 
							type="email"
							label="Update the Email Address"
							onChange={this.handleChange}
							name="email"
							defaultValue={email}
						/>
					</Grid>
					
					<Grid item xs={12}>
						<TextInputField 
							type="text"
							label="Update the Phone Number"
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

EditContact.propTypes = {
	getContact: PropTypes.func.isRequired,
	contact: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	contact: state.contact.contact
});

export default connect(
	mapStateToProps,
	{getContact, updateContact},
)(EditContact);
