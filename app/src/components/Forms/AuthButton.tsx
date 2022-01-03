import React from 'react';

const AuthButton = (props: { title: string }) => {
  const { title } = props;

  return (
    <button
      type="submit"
      className="aside__button btn-large waves-effect waves-light orange darken-2"
    >
      {title}
    </button>
  );
};

export default AuthButton;
