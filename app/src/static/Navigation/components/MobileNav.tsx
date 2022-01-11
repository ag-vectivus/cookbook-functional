import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import navBackground from '../../../assets/images/nav-background.png';

const MobileNav = (): JSX.Element => {
  const { auth, dispatchAuth } = useContext(AuthContext);

  const logOut = (): void => {
    dispatchAuth({ type: 'LOG_OUT', uid: 'init' });
  };

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
        <Link to="/contact">
          <span className="white-text">Contact</span>
        </Link>
      </li>
      <div className="nav__border"></div>
      {auth.uid === 'init' ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : (
        <li>
          <Link to="/" onClick={logOut}>
            <span className="deep-orange-text">Log Out</span>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default MobileNav;
