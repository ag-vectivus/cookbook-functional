import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetComponent = (props: { title: string; description?: string }) => {
  const { title, description } = props;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta
        name="description"
        content={description !== undefined ? description : title}
      />
    </Helmet>
  );
};

export default HelmetComponent;
