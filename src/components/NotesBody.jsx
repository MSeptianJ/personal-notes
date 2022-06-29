import React from 'react';
import NotesInput from './NotesInput';
import NotesList from './NotesList';
import NotesSearch from './NotesSearch';

export default function NotesBody({
	notes,
	onAdd,
	onDelete,
	onArchive,
	onSearch,
}) {
	const archived = notes.filter((note) => note.archived === true);
	const nonArchive = notes.filter((note) => note.archived === false);

	return (
		<div className="note-app__body">
			<NotesInput onAdd={onAdd} />
			<NotesSearch onSearch={onSearch} />
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
