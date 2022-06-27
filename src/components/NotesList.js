import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ notes }) {
	return (
		<div className="notes-list">
			{notes.map((note) => (
				<NotesItem key={note.id} id={note.id} {...note} />
			))}
		</div>
	);
}

export default NotesList;
