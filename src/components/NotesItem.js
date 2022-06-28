import React from 'react';
import NotesDeleteButton from './NotesDeleteButton';
import NotesArchiveButton from './NotesArchiveButton';
import NotesItemBody from './NotesItemBody';

function NotesItem({ id, onDelete, note }) {
	return (
		<div className="note-item">
			<NotesItemBody {...note} />
			<div className="note-item__action">
				<NotesDeleteButton id={id} onDelete={onDelete} />
				<NotesArchiveButton />
			</div>
		</div>
	);
}

export default NotesItem;
