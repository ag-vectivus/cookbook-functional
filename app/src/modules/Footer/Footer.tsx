import React from 'react';

// config
import endpoints from '../../config/endpoints';

// components
import FooterLinks from './components/FooterLinks';

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <div className="footer__border" />
      <footer className="footer page-footer teal darken-4">
        <div className="container">
          <div className="row">
            <p className="col s6">
              Website design & development by&nbsp;
              <a
                href={endpoints.portfolio}
                className="orange-text"
                target="_blank"
                rel="noopener"
              >
                Artur&nbsp;Gałecki
              </a>
            </p>
            <div className="col s6">
              <FooterLinks />
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container center-align">&#169; CookBook | 2021</div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
