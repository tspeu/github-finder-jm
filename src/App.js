import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Users from './components/users/Users';
import axios from 'axios'

// const URL = 'https://jsonplaceholder.typicode.com/todos/1';
const URL = 'https://api.github.com/users';
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
					<Users></Users>
				</div>
			</div>
		);
	}
	
}

export default App;
