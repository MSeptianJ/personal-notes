import React, { Component } from 'react';

export class NotesInput extends Component {
	render() {
		return (
			<div className="note-input">
				<h2>Buat Catatan</h2>
				<form>
					<p className="note-input__title__char-limit">Sisa Karakter: 50</p>
					<input
						className="note-input__title"
						type="text"
						placeholder="Ini adalah judul ..."
						required
					></input>
					<textarea
						className="note-input__body"
						type="text"
						placeholder="Tuliskan catatanmu disini ..."
						required
					></textarea>
					<button type="submit">Buat</button>
				</form>
			</div>
		);
	}
}

export default NotesInput;
