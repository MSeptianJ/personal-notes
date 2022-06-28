import React, { Component } from 'react';
import { getInitialData } from '../utils/utils';
import NotesBody from './NotesBody';
import NotesHeader from './NotesHeader';

export default class NotesApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getInitialData(),
		};

		this.onDelete = this.onDelete.bind(this);
		this.onAdd = this.onAdd.bind(this);
		this.onArchive = this.onArchive.bind(this);
	}

	onDelete(id) {
		const notes = this.state.notes.filter((note) => note.id !== id);
		this.setState({ notes });
	}

	onArchive(id) {
		const note = this.state.notes.find((note) => note.id === id);
		note.archived ? (note.archived = false) : (note.archived = true);
		this.setState({ note });
	}

	onAdd({ title, body }) {
		this.setState((prevState) => {
			return {
				contacts: [
					...prevState.notes,
					{
						id: +new Date(),
						title,
						body,
						archived: false,
						createdAt: +new Date(),
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
					onArchive={this.onArchive}
				/>
			</>
		);
	}
}
