import React from 'react';
import NotesSearch from './NotesSearch';

export default function NotesHeader({ onSearch }) {
	return (
		<div className="note-app__header">
			<h1>Notes</h1>
			<NotesSearch onSearch={onSearch} />
		</div>
	);
}
