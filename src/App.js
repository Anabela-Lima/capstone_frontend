import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Landing from './Landing';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
