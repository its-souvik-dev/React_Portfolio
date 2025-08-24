import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
