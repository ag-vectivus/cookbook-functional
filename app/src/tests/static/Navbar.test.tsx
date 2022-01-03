import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../static/Navigation/Navbar';

describe('Display navbar correctly', () => {
  test('Display logo and links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const logo = screen.getByText(/cookbook/i);
    expect(logo).toBeInTheDocument();

    const desktopNav = screen.getByTestId('desktop-nav');
    expect(desktopNav).toBeInTheDocument();

    const mobileNav = screen.getByTestId('mobile-nav');
    expect(mobileNav).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(10);
  });
});
