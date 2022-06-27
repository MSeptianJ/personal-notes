import React, { Component } from 'react';
import NotesSearch from './NotesSearch';

export class NotesHeader extends Component {
	render() {
		return (
			<div className="note-app__header">
				<h1>Notes</h1>
				<NotesSearch />
			</div>
		);
	}
}

export default NotesHeader;
