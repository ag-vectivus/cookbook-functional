import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// images
import oldMap from '../assets/images/old-map.png';

// components
import MainSection from '../components/MainSection';
import SitemapLink from '../components/SitemapLink';
import Image from '../components/Image/Image';

// config
import { categories, staticPages } from '../config/sitemap';

// seo
import seo from '../config/seo';
import HelmetComponent from '../components/Helmet/HelmetComponent';

const Sitemap = () => {
  useEffect(() => {
    // scroll to top
    const top = document.querySelector('h4');
    const topPosition = top!.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: topPosition, behavior: 'smooth' });
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
