import React, { Component } from 'react';

export default class NotesInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: '',
			charsLength: 0,
			maxLimit: 50,
		};

		this.onTitleChange = this.onTitleChange.bind(this);
		this.onBodyChange = this.onBodyChange.bind(this);
		this.onSubmitValues = this.onSubmitValues.bind(this);
	}

	onTitleChange(event) {
		const limit = this.state.maxLimit;
		const inputTitle = event.target.value.slice(0, limit);
		const charsLength = inputTitle.length;

		this.setState((prevState) => {
			return {
				...prevState,
				title: inputTitle,
				charsLength: charsLength,
			};
		});
	}

	onBodyChange(event) {
		this.setState((prevState) => {
			return {
				...prevState,
				body: event.target.value,
			};
		});
	}

	onSubmitValues(event) {
		event.preventDefault();

		const values = {
			title: this.state.title,
			body: this.state.body,
		};

		this.props.onAdd(values);
		this.setState({ title: '', body: '', charLength: 0 });
	}

	render() {
		return (
			<div className="note-input">
				<h2>Buat Catatan</h2>
				<form onSubmit={this.onSubmitValues}>
					<p className="note-input__title__char-limit">
						Sisa Karakter: {this.state.maxLimit - this.state.charsLength}
					</p>
					<input
						className="note-input__title"
						type="text"
						placeholder="Ini adalah judul ..."
						value={this.state.title}
						onChange={this.onTitleChange}
						required
					></input>
					<textarea
						className="note-input__body"
						type="text"
						placeholder="Tuliskan catatanmu disini ..."
						value={this.state.body}
						onChange={this.onBodyChange}
						required
					></textarea>
					<button type="submit">Buat</button>
				</form>
			</div>
		);
	}
}
