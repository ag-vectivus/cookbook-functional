import React from 'react';
import { Link } from 'react-router-dom';

const SitemapLink = (props: { name: string; type?: string }) => {
  const { name, type } = props;
  const path = `${type !== undefined ? '/' + type : ''}/${name}`;
  return (
    <li>
      <Link to={path} className="sitemap__link orange-text text-darken-4">
        {name}
      </Link>
    </li>
  );
};

export default SitemapLink;
