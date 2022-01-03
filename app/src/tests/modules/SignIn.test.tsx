import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignIn from '../../modules/auth/SignIn';

test('Display SignIn correctly', () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );

  const heading = screen.getByRole('heading', { name: /sign in/i });
  expect(heading).toBeInTheDocument();

  const input = screen.getByRole('textbox', { name: /email/i });
  expect(input).toBeInTheDocument();

  const button = screen.getByRole('button', { name: /sign in/i });
  expect(button).toBeInTheDocument();

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(3);
});
