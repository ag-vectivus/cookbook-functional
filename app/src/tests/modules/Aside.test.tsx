import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Aside from '../../modules/Aside/Aside';

describe('Display Aside correctly', () => {
  test('Display about section correctly', () => {
    render(
      <BrowserRouter>
        <Aside />
      </BrowserRouter>
    );

    const aboutImg = screen.getByAltText(/man/i);
    expect(aboutImg).toBeInTheDocument();

    const aboutBtn = screen.getByRole('link', { name: /more about us/i });
    expect(aboutBtn).toBeInTheDocument();
  });

  test('Display newsletter section correctly', () => {
    render(
      <BrowserRouter>
        <Aside />
      </BrowserRouter>
    );

    const newsletterHeading = screen.getByRole('heading', {
      name: /never miss a recipe/i,
    });
    expect(newsletterHeading).toBeInTheDocument();

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    expect(emailInput).toBeInTheDocument();

    const subscribeBtn = screen.getByRole('button', { name: /subscribe/i });
    expect(subscribeBtn).toBeInTheDocument();
  });
});
