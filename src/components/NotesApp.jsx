import React, { Component } from 'react';
import { getInitialData } from '../utils/utils';
import NotesBody from './NotesBody';
import NotesHeader from './NotesHeader';

export default class NotesApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getInitialData(),
			query: '',
		};

		this.onDelete = this.onDelete.bind(this);
		this.onAdd = this.onAdd.bind(this);
		this.onArchive = this.onArchive.bind(this);
		this.onSearch = this.onSearch.bind(this);
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
				notes: [
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

	onSearch(query) {
		this.setState({ query: query });
	}

	render() {
		const displayData = this.state.notes.filter((note) => {
			return this.state.query
				? note.title.toLowerCase().includes(this.state.query)
				: this.state.notes;
		});

		return (
			<>
				<NotesHeader />
				<NotesBody
					notes={displayData}
					onDelete={this.onDelete}
					onAdd={this.onAdd}
					onArchive={this.onArchive}
					onSearch={this.onSearch}
				/>
			</>
		);
	}
}
