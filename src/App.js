import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
