import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('App displays correctly', async () => {
  render(<App />);

  const heading = screen.getByRole('heading', { name: /cookbook/i });
  expect(heading).toBeInTheDocument();

  const noContent = screen.getByText(/there is no content yet/i);
  expect(noContent).toBeInTheDocument();

  const recipesList = await screen.findAllByRole('listitem');
  expect(recipesList).toHaveLength(4);
});
