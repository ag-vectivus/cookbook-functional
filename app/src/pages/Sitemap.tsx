import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import oldMap from '../assets/images/old-map.png';
import MainSection from '../components/Sections/MainSection';
import SitemapLink from '../components/Pages/SitemapLink';
import Image from '../components/Image';
import { categories, staticPages } from '../config/sitemap';
import seo from '../config/seo';
import HelmetComponent from '../components/Helmet/HelmetComponent';
import scrollToSelector from '../helpers/scrollToSelector';

const Sitemap = (): JSX.Element => {
  useEffect(() => {
    scrollToSelector('h4');
  }, []);

  return (
    <div className="container">
      <HelmetComponent title={`${seo.basicTitle} - Sitemap`} />
      <MainSection title="Sitemap">
        <div className="row">
          <div className="col s12 l6">
            <ul className="main__list">
              <li>
                <Link to={'/'} className="orange-text text-darken-4">
                  Main page
                </Link>
              </li>
              <li>
                <Link to={'/recipes'} className="orange-text text-darken-4">
                  Categories:
                </Link>
              </li>
              <ul className="main__list" data-testid="categoriesList">
                {categories.map((category) => {
                  return (
                    <SitemapLink
                      name={category}
                      type="recipes"
                      data-testid="recipes-link"
                      key={`sitemap-${category}-link`}
                    />
                  );
                })}
              </ul>
              {staticPages.map((staticPage) => {
                return (
                  <SitemapLink
                    name={staticPage}
                    key={`sitemap-${staticPage}-link`}
                  />
                );
              })}
            </ul>
          </div>
          <div className="col l6 hide-on-med-and-down">
            <Image src={oldMap} alt="" />
          </div>
        </div>
      </MainSection>
    </div>
  );
};

export default Sitemap;
