import React from 'react';

export default function NotesArchiveButton({ id, onArchive }) {
	return (
		<button
			className="note-item__archive-button"
			onClick={() => {
				onArchive(id);
			}}
		>
			Archive
		</button>
	);
}
