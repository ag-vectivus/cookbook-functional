import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

// components
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';

const Navbar: React.FC = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <React.Fragment>
      <nav className="nav nav-wrapper teal darken-4 text-white">
        <div className="container">
          <div>
            <Link to="/" className="left-aligned brand-logo nav__logo">
              CookBook
            </Link>
            <a
              href="#"
              className="sidenav-trigger"
              data-target="mobile-menu"
              data-testid="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
          <MobileNav />
          <DesktopNav />
        </div>
      </nav>
      <div className="nav__border" />
    </React.Fragment>
  );
};

export default Navbar;
