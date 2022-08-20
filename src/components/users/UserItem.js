import React, { Component } from 'react';
// import logo from '../../logo.svg';

class UserItem extends Component {
	// constructor(){
	// 	super();
	// 	console.log('UserItem');
	// 	this.state = {
	// 		id: 'id',
	// 		login: 'myUser',
	// 		avatar_url: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png',
	// 		html_url: 'https://github.com/tspeu'
	// 	}
	// }
	state = {
				id: 'id',
				login: 'myUser',
				avatar_url: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png',
				html_url: 'https://github.com/tspeu'
		}

	render() {
		const {login, avatar_url, html_url} = this.state;
    return (
				<div className='card text-center'>
						<img src={this.state.avatar_url} alt=''
						className='round-img'
						style={{width:'60px'}}/>
						<h3> { this.state.login }</h3>

						<div>
							<a href={this.state.html_url} className="btn btn-dark btn-sm my-1">
								More
							</a>
						</div>
				</div>
			);
		}
	}

export default UserItem;