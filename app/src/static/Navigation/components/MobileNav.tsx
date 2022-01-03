import React from 'react';
import { Link } from 'react-router-dom';

// images
import navBackground from '../../../assets/images/nav-background.png';

const MobileNav: React.FC = () => {
  return (
    <ul
      className="sidenav teal darken-4 white-text"
      id="mobile-menu"
      data-testid="mobile-nav"
    >
      <div className="background">
        <img className="responsive-img" src={navBackground} alt="" />
      </div>
      <li>
        <Link to="/recipes">
          <span className="white-text">Recipes</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <span className="white-text">Contact</span>
        </Link>
      </li>
      <div className="nav__border"></div>
      <li>
        <Link to="/signin">
          <span className="deep-orange-text">Sign In</span>
        </Link>
      </li>
      <li>
        <Link to="/signup">
          <span className="deep-orange-text">Sign Up</span>
        </Link>
      </li>
    </ul>
  );
};

export default MobileNav;
