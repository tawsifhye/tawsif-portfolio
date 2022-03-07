import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import FeaturedProjects from './Components/FeaturedProjects/FeaturedProjects';
import FloatingButton from './Components/FloatingButton/FloatingButton';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';

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
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          <Route path="/projects" element={<FeaturedProjects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
