import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
	switch(action.type){
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter( contact => contact.id !== action.payload)
			}
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

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		)
	}

}

export const Consumer = Context.Consumer;
