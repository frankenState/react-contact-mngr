import React, { Component } from 'react';
import axios from 'axios';


const Context = React.createContext();

const reducer = (state, action) => {
	switch(action.type){
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter( contact => contact.id !== action.payload)
			};
		case 'ADD_CONTACT':
			return {
				...state,
				contacts: [action.payload, ...state.contacts]
			};
		case 'UPDATE_CONTACT':
			return {
				...state,
				contacts: state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload) : contact)
			};
		default:
			return state;
	}
}

export class Provider extends Component {

	state = {
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

		],
		dispatch: action => {
			this.setState(state => reducer(state, action));
		}
	};

	async componentDidMount(){
		const res = await axios.get('https://jsonplaceholder.typicode.com/users');

		this.setState({contacts: res.data});
	}

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		)
	}

}

export const Consumer = Context.Consumer;
