import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Search extends Component {

	state = {
		search: '',
	}

	onSearch = (event) => {
		// console.log(event.target.name);
		// console.log(event.target.value);
		this.setState( { [event.target.name]: event.target.value})
	}
/*
no se puede tener un onchange separado  
*/

onSubmit = e => {
	e.preventDefault();
	console.log('submit',this.state.search);
	this.props.searchUsers(this.state.search);
	this.setState({search: ''});
}

	render() {
		return (
			<div>
				<form className='form' onSubmit={this.onSubmit}>
					<input 
					type="text" 
					name="search" 
					id="search" 
					placeholder='Search users...'
					onChange={this.onSearch}
					/>
					<input type="submit" value="Search" className='brn btn-dark btn-block'/>
				</form>
			</div>
		);
	}
}

// Search.propTypes = {
// 	searchUsers: PropTytes.string.
// };
// Search.defaultProps = {
// 	searchUsers: "tspeu",
// };

export default Search;

