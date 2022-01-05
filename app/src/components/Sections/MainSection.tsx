import React, { ReactNode } from 'react';

const MainSection = (props: { children: ReactNode; title: string }) => {
  const { children, title } = props;
  return (
    <section className="main__section z-depth-2">
      <h4 className="main__heading">{title}</h4>
      {children}
    </section>
  );
};

export default MainSection;
