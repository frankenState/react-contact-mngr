import { GET_CONTACTS } from '../actions/types';

const initialState = {
	contacts: [
		{
			id: 1,
			name: 'John Does',
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
			}
		default:
			return state;
	}
}