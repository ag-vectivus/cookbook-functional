import React, { useState } from 'react';
import MainSection from '../components/Sections/MainSection';
import postCredentials from '../api/postCredentials';
import getData from '../api/getData';
import endpoints from '../config/endpoints';
import FormFooter from '../components/Forms/FormFooter';
import formProps from '../config/formProps';
import IInputProps from '../ts/interfaces/IInputProps';
import FormInput from '../components/Forms/FormInput';
import IFormFooterProps from '../ts/interfaces/IFormFooterProps';

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

  const nameProps: IInputProps = {
    handleData: setName,
    ...formProps.name,
  };
  const emailProps: IInputProps = {
    handleData: setEmail,
    ...formProps.email,
  };
  const subjectProps: IInputProps = {
    handleData: setSubject,
    ...formProps.subject,
  };
  const userMessageProps: IInputProps = {
    handleData: setMssg,
    ...formProps.userMessage,
  };
  const footerProps: IFormFooterProps = { title: 'send', message };

  return (
    <div className="container">
      <MainSection title="contact">
        <div className="row">
          <form
            className="col s12 push-m2 m8 push-xl3 xl6"
            onSubmit={handleSubmit}
          >
            <FormInput inputProps={nameProps} />
            <FormInput inputProps={emailProps} />
            <FormInput inputProps={subjectProps} />
            <FormInput inputProps={userMessageProps} />
            <FormFooter formFooterProps={footerProps} />
          </form>
        </div>
      </MainSection>
    </div>
  );
};

export default Contact;
