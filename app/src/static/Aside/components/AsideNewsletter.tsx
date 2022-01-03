import React from 'react';
import AsideSection from '../../../components/AsideSection';

const AsideNewsletter = () => {
  return (
    <AsideSection title="Never miss a recipe!">
      <div className="row">
        <form className="col s10 push-s1 l12">
          <div className="input-field">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
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
