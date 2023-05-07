import React, { Component } from 'react';
// import { useParams } from "react-router-dom";

class User extends Component {
	
	componentDidMount() {
		// let params = useParams();
		// const { params } = this.props.params;
		// this.props.getUser(this.props.match.params.login);
		console.log('params')
	}


	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable
		} = this.props.user;

		return (
			<div>
				USER
			</div>
		);
	}
}

export default User;