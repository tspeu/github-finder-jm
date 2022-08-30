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
		setAlert: PropTypes.func.isRequired,
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
	 if (this.state.search === '') {
		this.props.setAlert('Please enter a name', 'warning');
		return
	 } 
		 console.log('submit',this.state.search);
		 this.props.searchUsers(this.state.search);
		 this.setState({ search: ''});
		 const elem = document.querySelector('[name="search"]')?.value;
		 console.log(elem)
		//  document.querySelector('[name="search"]')?.innerHTML = '';
}

	render() {
		const {showClear, clearUsers} = this.props;
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
					showClear && (
						<button onClick={clearUsers} className='brn btn-light btn-block'>Clear
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

