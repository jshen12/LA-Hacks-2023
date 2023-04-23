import logo from './logo.svg';
import './App.css';
import Layout from './Layout.js';

function App() {
  return (
    <div className="App">
      <Layout />
      <header className="App-header">
        
        <p>
          <img src={logo} className="App-logo" alt="logo" />
          Hi, Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    

  </div>
  );
}

export default App;
