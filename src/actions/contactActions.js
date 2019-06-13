import { 
	GET_CONTACTS, 
	GET_CONTACT, 
	UPDATE_CONTACT,
	ADD_CONTACT, 
	DELETE_CONTACT
} from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
	
	const res = await axios.get('http://jsonplaceholder.typicode.com/users');

	dispatch({
		type: GET_CONTACTS,
		payload: res.data
	})
};

export const getContact = (id) => async dispatch => {
	console.log(id);
	dispatch({
		type: GET_CONTACT,
		payload: id
	})
}


export const deleteContact = (id) => async dispatch => {
	
	await axios.delete('http://jsonplaceholder.typicode.com/users/' + id);

	dispatch({
		type: DELETE_CONTACT,
		payload: id
	});
};

export const addContact = (contact) => async dispatch => {
	
	const res = await axios.post('http://jsonplaceholder.typicode.com/users', contact);

	dispatch({
		type: ADD_CONTACT,
		payload: res.data
	});
};

export const updateContact = (contact) => async dispatch => {
	
	/*try {
		await axios.put('http://jsonplaceholder.typicode.com/users/' + contact.id, contact);
	} catch (e) { console.log(e)}
	finally {
		
	}*/

	dispatch({
		type: UPDATE_CONTACT,
		payload: contact
	});
};

