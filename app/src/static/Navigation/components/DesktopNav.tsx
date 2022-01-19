import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

const DesktopNav = (): JSX.Element => {
  const { auth, dispatchAuth } = useContext(AuthContext);

  const logOut = (): void => {
    dispatchAuth({ type: 'LOG_OUT', uid: 'init' });
  };

  return (
    <React.Fragment>
      <ul className="right hide-on-med-and-down" data-testid="desktop-nav">
        <li>
          <Link to="/recipes" data-testid="desktop-nav-recipes">
            Recipes
          </Link>
        </li>
        {auth.uid === 'init' ? null : (
          <li>
            <Link to="/myrecipes" data-testid="desktop-nav-my-recipes">
              My Recipes
            </Link>
          </li>
        )}
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          {auth.uid === 'init' ? (
            <React.Fragment>
              <Link
                to="/signin"
                className="btn-floating btn-small waves-effect waves-light orange darken-2 tooltipped"
                data-tooltip="Sign in"
              >
                <span className="material-icons">login</span>
              </Link>
              <Link
                to="/signup"
                className="btn-floating btn-small waves-effect waves-light orange darken-2 tooltipped"
                data-tooltip="Sign up"
              >
                <span className="material-icons">person_add</span>
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link
                to="/settings"
                className="btn-floating btn-small waves-effect waves-light orange darken-2 tooltipped"
                data-tooltip="Settings"
              >
                <span className="material-icons">manage_accounts</span>
              </Link>
              <Link
                to="/"
                className="btn-floating btn-small waves-effect waves-light orange darken-2 tooltipped"
                data-tooltip="Log out"
                onClick={logOut}
              >
                <span className="material-icons">logout</span>
              </Link>
            </React.Fragment>
          )}
        </li>
      </ul>
    </React.Fragment>
  );
};

export default DesktopNav;
