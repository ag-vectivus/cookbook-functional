import React, { useState, useEffect } from 'react';
import getData from '../../../api/getData';
import postCredentials from '../../../api/postCredentials';
import AuthEmail from '../../../components/Forms/AuthEmail';
import AsideSection from '../../../components/Sections/AsideSection';
import M from 'materialize-css';
import endpoints from '../../../config/endpoints';

const AsideNewsletter = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const newsletterFormMessage = postCredentials({ email });

    getData(`${endpoints.server}/newsletter`, newsletterFormMessage)
      .then((res) => setMessage(res.message))
      .catch((err) => setMessage(err.message));
  };

  useEffect(() => {
    if (message.length > 0) {
      M.toast({
        html: message,
        displayLength: 5000,
        classes: 'teal darken-4 text-white',
      });
    }
    return () => {
      setMessage('');
    };
  }, [message]);

  return (
    <AsideSection title="Never miss a recipe!">
      <div className="row">
        <form className="col s10 push-s1 l12" onSubmit={handleSubmit}>
          <AuthEmail handleChildData={setEmail} />
          <button
            type="submit"
            className="aside__button btn-large waves-effect waves-light orange darken-2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </AsideSection>
  );
};

export default AsideNewsletter;
