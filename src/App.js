import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import NotificationHistory from './components/NotificationHistory';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <div className='overlay'></div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/notifications" element={<NotificationHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
