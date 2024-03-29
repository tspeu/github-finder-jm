import { Component, Fragment } from 'react';
import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Alert from './components/layouts/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';
import User from './components/users/User';
import About from './components/pages/About';
import axios from 'axios'

// const URL = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
// &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
// const URL_SEARCH = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
// &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
class App extends Component {
	state = {
		users: [],
		user: {},
		loading: false,
		alert: null,
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

	// get user data
	getUser = async (username) => {
		this.setState({ loading: true});
		console.log(' username', username);
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
		&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		this.setState({
			user: res.data,
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

	// show alert
	showAlert = (msm, type) => {
		this.setState( {alert : {msm, type} });
		setTimeout(() => this.setState({alert: null}), 3000 );
	}

	render() {
		const {users, loading, user } = this.state;

		return (
			<Router>
				<div className="App">
					<NavBar/>
					<div className='container'>
					<Alert alert={this.state.alert}/>
					<Routes>
							<Route exact path='/' element={
									<Fragment>
										<Search 
										searchUsers= {this.searchUsers}
										clearUsers= {this.clearUsers}
										setAlert= {this.showAlert}
										showClear= {users.length > 0 ? true : false }
										/>
										< Users loading={loading} users={users} />
									</Fragment>

							} />
					
							<Route path="/about" element={<About/>}/>			
							<Route path="/user/:login" element={
							<User {...this.props} 
							getUser={this.getUser} 
							user={user}
							loading={loading}
							/>
							}/>			
						</Routes>
					</div>
				</div>

			</Router>
		);
	}
	
}

export default App;
