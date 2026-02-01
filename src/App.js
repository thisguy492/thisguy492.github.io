import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CubePainter from './pages/CubePainter';
import Resume from './pages/Resume';
import * as Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <nav>  {/* Navigation Links */}
       <h1>Xavier Stephenson's Site</h1> <Link to="/">Home</Link> | <Link to="/projects">Projects</Link> | 
       <Link to="/resume">Resume</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <div id="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cube" element={<CubePainter />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects.All />} />
          <Route path="/websites" element={<><Projects.Website /><Projects.All /></>} />
          <Route path="/rock" element={<><Projects.Rock /><Projects.All /></>} />
          <Route path="/tire" element={<><Projects.Tire /><Projects.All /></>} />
          <Route path="/pill" element={<><Projects.Pill/><Projects.All /></>} />
       
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}


export default App;