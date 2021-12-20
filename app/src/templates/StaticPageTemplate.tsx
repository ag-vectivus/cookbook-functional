import React, { useEffect, useState } from 'react';
import showdown from 'showdown';
import parse from 'html-react-parser';

// components
import MainSection from '../components/MainSection';

// config
import endpoints from '../config/endpoints';

const StaticPageTemplate = () => {
  const [content, setContent] = useState('');
  const title: string = window.location.pathname.slice(1);

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
      <MainSection title={title}>
        <div className="main__markup">{parse(content)}</div>
      </MainSection>
    </div>
  );
};

export default StaticPageTemplate;
