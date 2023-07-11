import Header from 'components/header/header';
import './App.scss';
import Dashboard from 'pages/dashboard/dashboard';
import { TabProvider } from 'context/tab.context';

function App() {
  return (
    <div className="app">
      <TabProvider>
        <Header />
        <div className="app-container">
          <Dashboard />
        </div>
      </TabProvider>
    </div>
  );
}

export default App;
