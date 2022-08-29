import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

	state = {
		search: '',
	}

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired,
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
	this.setState({ search: ''});
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
					/>{}
					<input type="submit" value="Search" className='brn btn-dark btn-block'/>
				</form>
				{
					this.props.showClear && (
						<button onClick={this.props.clearUsers} className='brn btn-light btn-block'>Clear
							<i className="fa fa-times mx-xs"></i>
						</button>
					)
				}
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

