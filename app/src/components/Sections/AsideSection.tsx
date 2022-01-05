import React, { ReactNode } from 'react';

const AsideSection = (props: { children: ReactNode; title: string }) => {
  const { children, title } = props;
  return (
    <section className="aside__section z-depth-2 center-align">
      <h4 className="aside__heading">{title}</h4>
      {children}
    </section>
  );
};

export default AsideSection;
