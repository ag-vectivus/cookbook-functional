import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../../modules/auth/SignUp';

test('Display SignUp correctly', () => {
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );

  const heading = screen.getByRole('heading', { name: /sign up/i });
  expect(heading).toBeInTheDocument();

  const inputs = screen.getAllByRole('textbox');
  expect(inputs).toHaveLength(2);

  const button = screen.getByRole('button', { name: /sign up/i });
  expect(button).toBeInTheDocument();

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(1);
});
