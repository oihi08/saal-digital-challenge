import Header from 'components/header/header';
import './App.scss';
import Dashboard from 'pages/dashboard/dashboard';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
