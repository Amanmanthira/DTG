import './App.css';
import { BrowserRouter as Router ,Routes, Route,} from 'react-router-dom';
import MainPage from './FrontEnd/MainPage';
import Contact from './FrontEnd/Contact/Contact';
import Services from './FrontEnd/Services/Services';
import About from './FrontEnd/About/About';
import Service2 from './FrontEnd/Service2/Service2';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="service2" element={<Service2/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
