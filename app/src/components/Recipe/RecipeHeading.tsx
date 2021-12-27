import React from 'react';

const RecipeHeading = (props: {
  children: JSX.Element | JSX.Element[];
  title: string;
}) => {
  const { children, title } = props;

  return (
    <section>
      <h5 className="main__heading">{title}</h5>
      {children}
    </section>
  );
};

export default RecipeHeading;
