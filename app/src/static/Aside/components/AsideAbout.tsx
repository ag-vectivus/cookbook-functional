import React from 'react';
import { Link } from 'react-router-dom';
import AsideSection from '../../../components/Sections/AsideSection';
import Image from '../../../components/Image';
import aboutImage from '../../../assets/images/about.jpg';

const AsideAbout = (): JSX.Element => {
  return (
    <AsideSection title="About">
      <div className="row">
        <div className="col s12 m6 l12">
          <Image
            src={aboutImage}
            alt="sweeties, book and coffe"
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
