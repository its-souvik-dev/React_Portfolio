import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];

  return (
    <nav className="fixed w-full h-20 bg-primary/90 backdrop-blur-sm z-50 shadow-lg">
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto px-4">
        <div>
          <h1 className="text-4xl font-bold text-secondary">
            Port<span className="text-lightText">folio.</span>
          </h1>
        </div>

        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, link }) => (
            <li key={id} className="nav-link text-lg font-medium capitalize tracking-wider">
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="cursor-pointer text-gray-400 md:hidden hover:text-secondary transition-colors">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <div className="fixed left-0 top-0 w-full h-screen bg-black/70 backdrop-blur-sm">
            <ul className="fixed left-0 top-0 w-full h-screen bg-primary p-4 flex flex-col justify-center items-center space-y-8">
              {links.map(({ id, link }) => (
                <li key={id} className="nav-link text-4xl font-medium capitalize">
                  <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 