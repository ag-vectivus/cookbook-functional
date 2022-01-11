import React from 'react';

const Image = (props: {
  src: string;
  alt?: string;
  className?: string;
}): JSX.Element => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const { alt, src, className } = props;

  return (
    <img
      onLoad={() => {
        setIsLoaded(true);
      }}
      className={`image ${
        isLoaded ? '' : 'image__blur'
      } responsive-img ${className}`}
      width={'100%'}
      alt={alt}
      src={src}
    />
  );
};

export default Image;
