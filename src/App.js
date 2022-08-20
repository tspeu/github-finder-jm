import './App.css';
import NavBar from './components/layouts/NavBar';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
			<div className='container'>
				<Users></Users>
			</div>
    </div>
  );
}

export default App;
