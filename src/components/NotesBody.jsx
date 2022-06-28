import React from 'react';
import NotesInput from './NotesInput';
import NotesList from './NotesList';

export default function NotesBody({ notes, onAdd, onDelete, onArchive }) {
	const archived = notes.filter((note) => note.archived === true);
	const nonArchive = notes.filter((note) => note.archived === false);

	return (
		<div className="note-app__body">
			<NotesInput onAdd={onAdd} />
			<h2>Catatan Aktif</h2>
			{nonArchive.length ? (
				<NotesList
					notes={nonArchive}
					onDelete={onDelete}
					onArchive={onArchive}
				/>
			) : (
				<p className="notes-list__empty-message">Tidak ada catatan</p>
			)}
			<h2>Arsip</h2>
			{archived.length ? (
				<NotesList notes={archived} onDelete={onDelete} onArchive={onArchive} />
			) : (
				<p className="notes-list__empty-message">Tidak ada catatan</p>
			)}
		</div>
	);
}
