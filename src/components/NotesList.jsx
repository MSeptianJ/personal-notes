import React from 'react';
import NotesItem from './NotesItem';

export default function NotesList({ notes, onDelete, onArchive }) {
	return (
		<div className="notes-list">
			{notes.map((note) => (
				<NotesItem
					key={note.id}
					id={note.id}
					onDelete={onDelete}
					onArchive={onArchive}
					note={note}
				/>
			))}
		</div>
	);
}
