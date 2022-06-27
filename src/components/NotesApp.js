import React, { Component } from 'react';
import { getInitialData } from '../utils/utils';
import NotesBody from './NotesBody';
import NotesHeader from './NotesHeader';

export class NotesApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getInitialData(),
		};
	}

	render() {
		return (
			<>
				<NotesHeader />
				<NotesBody notes={this.state.notes} />
			</>
		);
	}
}

export default NotesApp;
