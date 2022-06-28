import React from 'react';
import NotesDeleteButton from './NotesDeleteButton';
import NotesArchiveButton from './NotesArchiveButton';
import NotesItemBody from './NotesItemBody';

export default function NotesItem({ id, onDelete, onArchive, note }) {
	return (
		<div className="note-item">
			<NotesItemBody {...note} />
			<div className="note-item__action">
				<NotesDeleteButton id={id} onDelete={onDelete} />
				<NotesArchiveButton
					id={id}
					onArchive={onArchive}
					isArchived={note.archived}
				/>
			</div>
		</div>
	);
}
