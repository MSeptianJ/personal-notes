import React from 'react';
import NotesInput from './NotesInput';
import NotesList from './NotesList';

function NotesBody({ notes, onDelete }) {
	return (
		<div className="note-app__body">
			<NotesInput />
			<h2>Catatan Aktif</h2>
			<NotesList notes={notes} onDelete={onDelete} />
			<h2>Arsip</h2>
			<NotesList notes={notes} />
		</div>
	);
}

export default NotesBody;
