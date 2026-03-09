import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // NAYA IMPORT
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingMenu from './components/FloatingMenu';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Policies from './pages/Policies';

function App() {
  return (
    <Router>
      {/* HAR PAGE CHANGE PAR UPAR SCROLL KARNE KE LIYE */}
      <ScrollToTop /> 
      
      <div className="flex flex-col min-h-screen bg-grid-light relative">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies" element={<Policies />} />
          </Routes>
        </main>

        <Footer />
        <FloatingMenu />
      </div>
    </Router>
  );
}

export default App;