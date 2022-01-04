import React, { useState } from 'react';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <a
      className={`scroll-button btn-floating btn-large teal darken-2 scale-transition ${
        visible ? 'scale-in' : 'scale-out'
      }`}
      onClick={scrollToTop}
    >
      <i className="material-icons">arrow_upward</i>
    </a>
  );
};

export default ScrollButton;
