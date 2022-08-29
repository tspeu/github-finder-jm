import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios'

const URL = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
// const URL_SEARCH = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
// &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
class App extends Component {
	state = {
		users: [],
		loading: false
	}

	// async componentDidMount  () {
	// 	this.setState({ loading: true});

	// 	const res = await axios.get(URL);
	// 	this.setState({
	// 		users: res.data,
	// 		loading: false
	// 	})
	// 	console.log(res?.data);
	// };
	// Seach github users
	searchUsers = async search => {
		this.setState({ loading: true});
		console.log('App searchForUsers', search)
		const res = await axios.get(
			`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
		&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		this.setState({
			users: res.data?.items,
			loading: false
		})
		console.log(res?.data?.items);
	}

	// clear user form state
	clearUsers = () => {
		console.log('App clearUsers');
		this.setState({
			users: [],
			loading: false
		})
	}

	render() {
		return (
			<div className="App">
				<NavBar ></NavBar>
				<div className='container'>
						<Search 
						searchUsers= {this.searchUsers}
						clearUsers= {this.clearUsers}
						showClear= {this.state.users.length > 0 ? true : false }
						/>
					< Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
	
}

export default App;
