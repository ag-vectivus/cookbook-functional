import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

test('App displays correctly', () => {
  render(<App />);

  const heading = screen.getByRole('heading', { name: /cookbook/i });
  expect(heading).toBeInTheDocument();

  const noContent = screen.getByText(/there is no content yet/i);
  expect(noContent).toBeInTheDocument();
});
