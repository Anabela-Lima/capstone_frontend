import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import LogIn from './components/LogIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
