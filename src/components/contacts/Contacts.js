import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';

import Contact from './Contact';

import Typography from '@material-ui/core/Typography';

class Contacts extends Component {


	constructor(props){
		super(props);
		console.log("Constructor!");
	}

	componentDidMount() {
		this.props.getContacts();
	}

	render() {

		const { contacts } = this.props;

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
	}
}

Contacts.propTypes = {
	contacts: PropTypes.array.isRequired,
	getContacts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	contacts: state.contact.contacts
});


export default connect(
	mapStateToProps, 
	{getContacts}
)(Contacts);