import React from 'react';
import { render, screen } from '@testing-library/react';
import ChangePassword from '../../modules/userSettings/ChangePassword';
import userEvent from '@testing-library/user-event';
import messages from '../../config/messages';

test('EPassword Change fail', async () => {
  render(<ChangePassword auth={{ uid: 'init' }} />);

  const button = screen.getByRole('button');

  const newPassword = screen.getByLabelText('*New password');
  expect(newPassword).toBeInTheDocument();

  const newPasswordRepeat = screen.getByLabelText('*Repeat new password');
  expect(newPasswordRepeat).toBeInTheDocument();

  let notEqual = screen.queryByText(messages.ValuesNotEqual);
  expect(notEqual).not.toBeInTheDocument();

  userEvent.clear(newPassword);
  userEvent.clear(newPasswordRepeat);
  userEvent.type(newPassword, 'spock123');
  userEvent.type(newPasswordRepeat, 'spocks123');
  userEvent.click(button);

  notEqual = await screen.findByText(messages.ValuesNotEqual);
  expect(notEqual).toBeInTheDocument();
});
