import { 
	GET_CONTACTS, 
	ADD_CONTACT, 
	DELETE_CONTACT 
} from '../actions/types';

const initialState = {
	contacts: [
		{
			id: 1,
			name: 'John Doe',
			phone: '09123456789',
			email: 'johndoe@gmail.com'
		},
		{
			id: 2,
			name: 'Karen Williams',
			phone: '09123456789',
			email: 'kwilliams@gmail.com'
		},
		{
			id: 3,
			name: 'Neck Fury',
			phone: '09123456789',
			email: 'nfury@gmail.com'
		},
	]
};

export default function(state = initialState, action) {
	switch(action.type){
		case GET_CONTACTS:
			return {
				...state
			};
		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(contact => contact.id !== action.payload)
			};
		case ADD_CONTACT:
			return {
				...state,
				contacts:[action.payload, ...state.contacts]
			};
		default:
			return state;
	}
}