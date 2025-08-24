import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [nav]);

  return (
    <nav className={`fixed w-full h-16 sm:h-20 z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto px-4 sm:px-8">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
            Dev<span className="text-lightText"> Souvik.</span>
          </h1>
        </div>

        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, link }) => (
            <li 
              key={id} 
              className="nav-link text-base lg:text-lg font-medium capitalize tracking-wider cursor-pointer hover:text-secondary transition-colors"
            >
              <Link 
                to={link} 
                smooth 
                duration={500}
                spy={true}
                activeClass="text-secondary"
                offset={-80}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div 
          onClick={() => setNav(!nav)} 
          className="cursor-pointer text-gray-400 md:hidden hover:text-secondary transition-colors z-50"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black/70 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          nav ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className={`fixed inset-y-0 right-0 w-[250px] bg-primary p-4 transition-transform duration-300 transform ${
            nav ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <ul className="flex flex-col justify-center items-center h-full space-y-8">
              {links.map(({ id, link }) => (
                <li 
                  key={id} 
                  className="nav-link text-2xl font-medium capitalize w-full text-center"
                >
                  <Link 
                    onClick={() => setNav(false)} 
                    to={link} 
                    smooth 
                    duration={500}
                    spy={true}
                    activeClass="text-secondary"
                    offset={-64}
                    className="block py-2 hover:text-secondary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 