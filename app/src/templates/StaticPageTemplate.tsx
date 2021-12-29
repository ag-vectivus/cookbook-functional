import React, { useEffect, useState } from 'react';
import showdown from 'showdown';
import parse from 'html-react-parser';

// components
import MainSection from '../components/MainSection';

// seo
import seo from '../config/seo';
import HelmetComponent from '../components/Helmet/HelmetComponent';

// config
import endpoints from '../config/endpoints';

// helpers
import scrollToSelector from '../helpers/scrollToSelector';

const StaticPageTemplate = () => {
  const [content, setContent] = useState('');
  const title: string = window.location.pathname.slice(1);

  useEffect(() => {
    scrollToSelector('h4');
  }, [content]);

  useEffect(() => {
    fetch(`${endpoints.server}/text/${title}.md`)
      .then((res) => res.text())
      .then((text) => {
        const converter = new showdown.Converter();
        setContent(converter.makeHtml(text));
      })
      .catch((err) => setContent(err.message));

    return () => {
      setContent('');
    };
  }, [title]);

  return (
    <div className="container">
      <HelmetComponent title={`${seo.basicTitle} - ${title}`} />
      <MainSection title={title}>
        <div className="main__markup">{parse(content)}</div>
      </MainSection>
    </div>
  );
};

export default StaticPageTemplate;
