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

    const about = screen.getByAltText(/man/i);
    expect(about).toBeInTheDocument();

    const aboutBtn = screen.getByRole('link', { name: /more about us/i });
    expect(aboutBtn).toBeInTheDocument();
  });
});
