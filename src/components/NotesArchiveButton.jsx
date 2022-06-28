import React from 'react';

export default function NotesArchiveButton({ id, onArchive, isArchived }) {
	return (
		<button
			className="note-item__archive-button"
			onClick={() => {
				onArchive(id);
			}}
		>
			{isArchived ? 'Pindahkan' : 'Arsipkan'}
		</button>
	);
}
