import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserSettings from '../../modules/userSettings/UserSettings';
import userEvent from '@testing-library/user-event';

test('Display UserSettings correctly', () => {
  render(
    <BrowserRouter>
      <UserSettings />
    </BrowserRouter>
  );

  const heading = screen.getByRole('heading', { name: /settings/i });
  expect(heading).toBeInTheDocument();

  const changeEmailText = screen.getByText(/change e-mail/i);
  expect(changeEmailText).toBeInTheDocument();

  const changePasswordText = screen.getByText(/change password/i);
  expect(changePasswordText).toBeInTheDocument();

  const deleteAccountText = screen.getByText(/delete account/i);
  expect(deleteAccountText).toBeInTheDocument();

  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(3);

  expect(changeEmailText.parentElement).not.toHaveClass('active');
  userEvent.click(changeEmailText);
  expect(changeEmailText.parentElement).toHaveClass('active');

  expect(changePasswordText.parentElement).not.toHaveClass('active');
  userEvent.click(changePasswordText);
  expect(changePasswordText.parentElement).toHaveClass('active');

  expect(deleteAccountText.parentElement).not.toHaveClass('active');
  userEvent.click(deleteAccountText);
  expect(deleteAccountText.parentElement).toHaveClass('active');
});
