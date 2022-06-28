import React, { Component } from 'react';
import { getInitialData } from '../utils/utils';
import NotesBody from './NotesBody';
import NotesHeader from './NotesHeader';

export class NotesApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getInitialData(),
		};

		this.onDelete = this.onDelete.bind(this);
	}

	onDelete(id) {
		const notes = this.state.notes.filter((note) => note.id !== id);
		this.setState({ notes });
	}

	onAdd({ name, tag }) {
		this.setState((prevState) => {
			return {
				contacts: [
					...prevState.contacts,
					{
						id: +new Date(),
						name,
						tag,
						imageUrl: '/images/default.jpg',
					},
				],
			};
		});
	}

	render() {
		return (
			<>
				<NotesHeader />
				<NotesBody
					notes={this.state.notes}
					onDelete={this.onDelete}
					onAdd={this.onAdd}
				/>
			</>
		);
	}
}

export default NotesApp;
