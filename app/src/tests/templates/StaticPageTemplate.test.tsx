import React from 'react';
import { render, screen } from '@testing-library/react';
import StaticPageTemplate from '../../templates/StaticPageTemplate';

describe('StaticPageTemplate displays correctly', () => {
  test('About', () => {
    global.window = Object.create(window);
    const url = '/about';
    Object.defineProperty(window, 'location', {
      value: {
        pathname: url,
      },
      writable: true,
    });

    render(<StaticPageTemplate />);

    const heading = screen.getByRole('heading', { name: /about/i });
    expect(heading).toBeInTheDocument();
  });

  test('Privacy', () => {
    global.window = Object.create(window);
    const url = '/privacy';
    Object.defineProperty(window, 'location', {
      value: {
        pathname: url,
      },
      writable: true,
    });

    render(<StaticPageTemplate />);

    const heading = screen.getByRole('heading', { name: /privacy/i });
    expect(heading).toBeInTheDocument();
  });

  test('Terms', () => {
    global.window = Object.create(window);
    const url = '/terms';
    Object.defineProperty(window, 'location', {
      value: {
        pathname: url,
      },
      writable: true,
    });

    render(<StaticPageTemplate />);

    const heading = screen.getByRole('heading', { name: /terms/i });
    expect(heading).toBeInTheDocument();
  });
});
