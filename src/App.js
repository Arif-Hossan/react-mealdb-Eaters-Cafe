import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import NavBar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Slider></Slider>
    </div>
  );
}

export default App;
