import React from 'react';

export default function NotesSearch({ onSearch }) {
	return (
		<div className="note-search">
			<label htmlFor="input__search">Search note</label>
			<input
				id="input__search"
				type="text"
				onChange={(event) => onSearch(event.target.value)}
			></input>
		</div>
	);
}
