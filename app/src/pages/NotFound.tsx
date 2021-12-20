import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <main className="main">
        <section className="main__section z-depth-2">
          <div className="center-align">
            <div className="row">
              <h1 className="main__heading">404</h1>
            </div>
            <div className="row">
              <p>There is no page like this.</p>
            </div>
            <div className="row">
              <p>
                Come back to the{' '}
                <Link to={'/'} className="orange-text text-darken-4">
                  home page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotFound;
