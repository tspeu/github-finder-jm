// import logo from './logo.svg';
import './App.css';
import NavBar from './components/layouts/NavBar';
import UserItem from './components/users/UserItem';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
			<UserItem></UserItem>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
