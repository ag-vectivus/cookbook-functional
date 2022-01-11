import React, { useState } from 'react';
import MainSection from '../components/Sections/MainSection';
import AuthEmail from '../components/Forms/AuthEmail';
import AuthButton from '../components/Forms/AuthButton';
import postCredentials from '../api/postCredentials';
import getData from '../api/getData';
import endpoints from '../config/endpoints';
import AuthFooter from '../components/Forms/AuthFooter';

const Contact = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [mssg, setMssg] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contactFormMessage = postCredentials({ name, email, subject, mssg });

    getData(`${endpoints.server}/contact`, contactFormMessage)
      .then((res) => setMessage(res.message))
      .catch((err) => setMessage(err.message));
  };

  return (
    <div className="container">
      <MainSection title="contact">
        <div className="row">
          <form
            className="col s12 push-m2 m8 push-xl3 xl6"
            onSubmit={handleSubmit}
          >
            <div className="input-field">
              <i className="material-icons prefix">portrait</i>
              <input
                id="name"
                type="text"
                className="validate"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <AuthEmail handleChildData={setEmail} />
            <div className="input-field">
              <i className="material-icons prefix">title</i>
              <input
                id="subject"
                type="text"
                className="validate"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">subject</i>
              <textarea
                id="textarea"
                className="materialize-textarea"
                onChange={(e) => setMssg(e.target.value)}
                required
              />
              <label htmlFor="textarea">Your message...</label>
            </div>
            <AuthFooter title="send" message={message} />
          </form>
        </div>
      </MainSection>
    </div>
  );
};

export default Contact;
