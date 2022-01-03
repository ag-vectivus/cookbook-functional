import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ResetPassword from '../../modules/auth/ResetPassword';

test('Display ResetPassword correctly', () => {
  render(
    <BrowserRouter>
      <ResetPassword />
    </BrowserRouter>
  );

  const heading = screen.getByRole('heading', { name: /reset password/i });
  expect(heading).toBeInTheDocument();

  const input = screen.getByRole('textbox', { name: /email/i });
  expect(input).toBeInTheDocument();

  const button = screen.getByRole('button', { name: /reset/i });
  expect(button).toBeInTheDocument();

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(1);
});
