const scrollToSelector = (selector: string): void => {
  const top = document.querySelector(selector);
  const topPosition = top!.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: topPosition, behavior: 'smooth' });
};

export default scrollToSelector;
