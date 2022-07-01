import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import LogIn from './components/LogIn';
import MainPage from './components/MainPage/MainPage';
import MainCarousel from './components/MainCarousel/MainCarousel';

function App() {
  return (
    <>
      {/* <MainCarousel /> */}
      <MainPage />
    </>
  );
}

export default App;


// <BrowserRouter>
//         <Routes>
//           <Route path="/LogIn" element={<LogIn />} />
//           <Route path="/Home" element={<Home/>} />
//         </Routes>
//       </BrowserRouter>