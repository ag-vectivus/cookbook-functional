import React from 'react';
import { Link } from 'react-router-dom';
import headerBackground from '../../assets/images/header-background.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__border" />
      <img src={headerBackground} className="responsive-img" alt="" />
      <div className="header__logo hide-on-large-only">
        <Link to="/recipes">
          <span className="header__logo--font-size material-icons teal-text text-darken-4">
            menu_book
          </span>
        </Link>
      </div>
      <div
        className="header__logo hide-on-med-and-down"
        data-testid="header-cookbook"
      >
        CookBook
      </div>
    </header>
  );
};
export default Header;
