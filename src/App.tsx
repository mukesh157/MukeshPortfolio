import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
