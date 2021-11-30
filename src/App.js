import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
