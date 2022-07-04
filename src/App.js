import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing/Landing';
import LogIn from './components/LogIn/LogIn';
import MainCarousel from './components/MainCarousel/MainCarousel';
import Friends from './components/Friends/Friends';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Register" element={<MainCarousel />} />
          <Route path="/" element={<Landing />} />
          <Route path="/Friends" element={<Friends />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
