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

const StaticPageTemplate = () => {
  const [content, setContent] = useState('');
  const title: string = window.location.pathname.slice(1);

  useEffect(() => {
    // scroll to top
    const top = document.querySelector('h4');
    const topPosition = top!.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: topPosition, behavior: 'smooth' });
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
