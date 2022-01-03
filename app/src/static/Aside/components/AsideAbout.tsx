import React from 'react';
import { Link } from 'react-router-dom';

// components
import AsideSection from '../../../components/AsideSection';
import Image from '../../../components/Image/Image';

const AsideAbout = () => {
  return (
    <AsideSection title="About">
      <div className="row">
        <div className="col s12 m6 l12">
          <Image
            src="https://images.unsplash.com/photo-1601923907709-db31b8cd0d63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="man"
            className="aside__image"
          />
        </div>
        <div className="col s12 m6 l12">
          <p className="aside__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            voluptas ut sapiente obcaecati sint nobis dolore illum? Architecto
            eum quae dicta est aut, reprehenderit enim impedit praesentium
            quidem perferendis quas.
          </p>
          <div className="row aside__button">
            <Link
              to="/about"
              className="btn-large waves-effect waves-light orange darken-2"
            >
              More about us
            </Link>
          </div>
        </div>
      </div>
    </AsideSection>
  );
};

export default AsideAbout;
