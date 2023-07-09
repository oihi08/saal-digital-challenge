import logo from 'assets/logo_saal.svg';
import './App.css';
import Dashboard from 'pages/dashboard/dashboard';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <div className="app-container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
