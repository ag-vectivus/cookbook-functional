import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNav: React.FC = () => {
  return (
    <React.Fragment>
      <ul className="right hide-on-med-and-down" data-testid="desktop-nav">
        <li>
          <Link to="/">Recipes</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link
            to="/"
            className="btn-floating btn-small waves-effect waves-light orange darken-2 tooltipped"
            data-tooltip="Sign in"
          >
            <span className="material-icons">login</span>
          </Link>
          <Link
            to="/"
            className="btn-floating btn-small waves-effect waves-light orange darken-2 tooltipped"
            data-tooltip="Sign up"
          >
            <span className="material-icons">person_add</span>
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default DesktopNav;
