import React from 'react';
import NotesInput from './NotesInput';
import NotesList from './NotesList';

function NotesBody({ notes }) {
	return (
		<div className="note-app__body">
			<NotesInput />
			<h2>Catatan Aktif</h2>
			<NotesList notes={notes} />
			<h2>Arsip</h2>
		</div>
	);
}

export default NotesBody;
