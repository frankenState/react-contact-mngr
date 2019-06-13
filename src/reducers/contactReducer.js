import { 
	GET_CONTACTS, 
	GET_CONTACT, 
	UPDATE_CONTACT,
	ADD_CONTACT, 
	DELETE_CONTACT 
} from '../actions/types';

const initialState = { contacts: [], contact: { id:'',name:'',phone:'',email:''}};


/*	contacts: [
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
*/

export default function(state = initialState, action) {
	switch(action.type){
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.payload
			};
		case GET_CONTACT:
			return {
				...state,
				contact: state.contacts.find(e => e.id == action.payload)
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
		case UPDATE_CONTACT:
			return {
				...state,
				contacts: state.contacts.map(c => c.id === action.payload.id ? (c = action.payload) : c)
			};
		default:
			return state;
	}
}