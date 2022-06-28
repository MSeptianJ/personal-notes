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
				<input
					type="text"
					placeholder="Cari catatan ..."
					onChange={this.onQueryChange}
				></input>
			</div>
		);
	}
}

export default NotesSearch;
