import React from 'react';
import { Link } from 'react-router-dom';

// images
import oldMap from '../assets/images/old-map.png';

// components
import MainSection from '../components/MainSection';
import SitemapLink from '../components/SitemapLink';

// config
import { categories, staticPages } from '../config/sitemap';

const Sitemap = () => {
  return (
    <div className="container">
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
            <img src={oldMap} alt="" className="responsive-img" />
          </div>
        </div>
      </MainSection>
    </div>
  );
};

export default Sitemap;
