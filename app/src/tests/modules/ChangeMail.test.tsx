import React from 'react';
import { render, screen } from '@testing-library/react';
import ChangeMail from '../../modules/userSettings/ChangeMail';
import userEvent from '@testing-library/user-event';
import messages from '../../config/messages';

test('Email Change fail', async () => {
  render(<ChangeMail auth={{ uid: 'init' }} />);

  const button = screen.getByRole('button');

  const newEmail = screen.getByLabelText('New email');
  expect(newEmail).toBeInTheDocument();

  const newEmailRepeat = screen.getByLabelText('Repeat new email');
  expect(newEmailRepeat).toBeInTheDocument();

  let notEqual = screen.queryByText(messages.ValuesNotEqual);
  expect(notEqual).not.toBeInTheDocument();

  userEvent.clear(newEmail);
  userEvent.clear(newEmailRepeat);
  userEvent.type(newEmail, 'spock@mock.com');
  userEvent.type(newEmailRepeat, 'spocks@mock.com');
  userEvent.click(button);

  notEqual = await screen.findByText(messages.ValuesNotEqual);
  expect(notEqual).toBeInTheDocument();
});
