import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sitemap from '../../pages/Sitemap';

describe('Display Sitemap page correctly', () => {
  test('Sitemap page displays links from an array', () => {
    render(
      <BrowserRouter>
        <Sitemap />
      </BrowserRouter>
    );

    const categoriesLinks = screen.getByTestId('categoriesList');
    expect(categoriesLinks).toBeInTheDocument();

    const listElements = screen.getAllByRole('listitem');
    expect(listElements).toHaveLength(21);
  });
});
