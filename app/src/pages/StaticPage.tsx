import React, { useEffect, useState } from 'react';
import showdown from 'showdown';
import parse from 'html-react-parser';
import MainSection from '../components/Sections/MainSection';
import seo from '../config/seo';
import HelmetComponent from '../components/Helmet/HelmetComponent';
import endpoints from '../config/endpoints';
import scrollToSelector from '../helpers/scrollToSelector';

const StaticPage = () => {
  const [content, setContent] = useState('');
  const title: string = window.location.pathname.slice(1);

  useEffect(() => {
    scrollToSelector('h4');
  }, [content]);

  useEffect(() => {
    const localData = localStorage.getItem(`${title}`);
    if (localData !== null) {
      setContent(JSON.parse(localData));
      return;
    }

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

  useEffect(() => {
    localStorage.setItem(`${title}`, JSON.stringify(content));
  }, [content]);

  return (
    <div className="container">
      <HelmetComponent title={`${seo.basicTitle} - ${title}`} />
      <MainSection title={title}>
        <div className="main__markup">{parse(content)}</div>
      </MainSection>
    </div>
  );
};

export default StaticPage;
