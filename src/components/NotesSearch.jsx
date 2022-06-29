import React, { Component } from 'react';

export class NotesSearch extends Component {
	constructor(props) {
		super(props);

		this.onQueryChange = this.onQueryChange.bind(this);
	}

	onQueryChange(event) {
		this.props.onSearch(event.target.value);
	}

	render() {
		return (
			<div className="note-search">
				<label htmlFor="input__search">Search note</label>
				<input
					id="input__search"
					type="text"
					onChange={this.onQueryChange}
				></input>
			</div>
		);
	}
}

export default NotesSearch;
