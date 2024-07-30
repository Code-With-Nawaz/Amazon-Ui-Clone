import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/style.css'
import Header from './components/Header.jsx';
import Slider from './components/Slider.jsx';
import Card from './components/Card.jsx';
import BackTotop from './components/BackTotop.jsx'
import FooterSignin from './components/FooterSignin.jsx'
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
        <Route path="/" element={[ <Slider/>,<Card/>,<FooterSignin/>,<BackTotop/>,<Footer/>]} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
