import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../../pages/Contact';

test('Contact page displays correctly', () => {
  render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );

  const heading = screen.getByRole('heading', { name: /contact/i });
  expect(heading).toBeInTheDocument();

  const inputs = screen.getAllByRole('textbox');
  expect(inputs).toHaveLength(4);

  const button = screen.getByRole('button', { name: /send/i });
  expect(button).toBeInTheDocument();
});
