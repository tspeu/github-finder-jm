import React, { Component } from 'react';
import UserItem from './UserItem';


class Users extends Component {
	state = {
		users: [
			{
				id: '1',
				login: 'myUser1',
				avatar_url: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png',
				html_url: 'https://github.com/tspeu'
			},
			{
				id: '2',
				login: 'myUser2',
				avatar_url: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png',
				html_url: 'https://github.com/tspeu'
			},
			{
				id: '3',
				login: 'myUser3',
				avatar_url: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png',
				html_url: 'https://github.com/tspeu'
			}
		]
	}

	render() {
		return (
			<div>
				{this.state.users.map((user) => (
					<UserItem key={user.id} user={ user }/> 
				))}
			</div>
		);
	}
}

export default Users;