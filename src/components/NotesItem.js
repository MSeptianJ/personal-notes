import React from 'react';
import NotesDeleteButton from './NotesDeleteButton';
import NotesArchiveButton from './NotesArchiveButton';
import { showFormattedDate } from '../utils/utils';

function NotesItem({ id, title, body, createdAt }) {
	return (
		<div className="note-item">
			<div className="note-item__content">
				<h3 className="note-item__title">{title}</h3>
				<p className="note-item__date">{showFormattedDate(createdAt)}</p>
				<p className="note-item__body">{body}</p>
			</div>
			<div className="note-item__action">
				<NotesDeleteButton />
				<NotesArchiveButton />
			</div>
		</div>
	);
}

export default NotesItem;
