import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import AllProjects from './Components/AllProjects/AllProjects';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import FloatingButton from './Components/FloatingButton/FloatingButton';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <FloatingButton />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
