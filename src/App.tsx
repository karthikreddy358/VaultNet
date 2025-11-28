import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Flow from './components/Flow';
import Applications from './components/Applications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1F]">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Flow />
      <Applications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
