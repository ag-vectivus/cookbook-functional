import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks: React.FC = () => {
  return (
    <ul className="footer__links">
      <li>
        <Link to="/privacy" className="footer__link white-text">
          Privacy
        </Link>
      </li>
      <li>
        <Link to="/sitemap" className="footer__link white-text">
          Sitemap
        </Link>
      </li>
      <li>
        <Link to="/contact" className="footer__link white-text">
          Contact us
        </Link>
      </li>
      <li>
        <Link to="/terms" className="footer__link white-text">
          Terms of use
        </Link>
      </li>
    </ul>
  );
};

export default FooterLinks;
