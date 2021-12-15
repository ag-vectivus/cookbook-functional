import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../modules/Footer/Footer';

describe('Display footer correctly', () => {
  test('Display link to the portfolio website and other links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const portfolioLink = screen.getByRole('link', { name: /Artur/i });
    expect(portfolioLink).toBeInTheDocument();

    const innerLinks = screen.getAllByRole('listitem');
    expect(innerLinks).toHaveLength(4);
  });
});
