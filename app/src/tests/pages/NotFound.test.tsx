import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../../pages/NotFound';

test('NotFound page displays correctly', () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );

  const heading = screen.getByRole('heading', { name: '404' });
  expect(heading).toBeInTheDocument();
});
