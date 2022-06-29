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
		this.setState({ title: '', body: '', charsLength: 0 });
	}

	render() {
		return (
			<div className="note-input">
				<h2>Buat catatan</h2>
				<form onSubmit={this.onSubmitValues}>
					<p className="note-input__title__char-limit">
						Sisa karakter: {this.state.maxLimit - this.state.charsLength}
					</p>
					<label htmlFor="input__title">Title</label>
					<input
						id="input__title"
						className="note-input__title"
						type="text"
						value={this.state.title}
						onChange={this.onTitleChange}
						required
					></input>
					<label htmlFor="input__body">Note body</label>
					<textarea
						id="input__body"
						className="note-input__body"
						type="text"
						value={this.state.body}
						onChange={this.onBodyChange}
						required
					></textarea>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}
