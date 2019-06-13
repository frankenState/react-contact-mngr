import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_CONTACTS } from '../../actions/types';

import Contact from './Contact';

import Typography from '@material-ui/core/Typography';

class Contacts extends Component {

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

const mapDispatchToProps = (dispatch) => ({
	getContacts: () => dispatch({type: GET_CONTACTS})
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);