import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios'

const URL = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
class App extends Component {
	state = {
		users: [],
		loading: false
	}

	async componentDidMount  () {
		this.setState({ loading: true});

		const res = await axios.get(URL);
		this.setState({
			users: res.data,
			loading: false
		})
		console.log(res?.data);
	};

	render() {
		return (
			<div className="App">
				<NavBar></NavBar>
				<div className='container'>
						<Search/>
					< Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
	
}

export default App;
