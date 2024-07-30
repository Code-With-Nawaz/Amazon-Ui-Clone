import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/style.css'
import Header from './components/Header.jsx';
import Slider from './components/Slider.jsx';
import Card from './components/Card.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={[<Header />, <Slider/>,<Card/>]} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
