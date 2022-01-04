import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ResetPassword from '../../modules/auth/ResetPassword';
import userEvent from '@testing-library/user-event';

test('Display ResetPassword correctly', async () => {
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

  // initial state - there is no message
  let message = screen.queryByTestId('request-message');
  expect(message).not.toBeInTheDocument();

  // wrong email typed
  userEvent.clear(input);
  userEvent.type(input, 'mock@mock.com');
  userEvent.click(button);

  message = await screen.findByTestId('request-message');
  expect(message).toBeInTheDocument();
  expect(message).toHaveTextContent('There is no such email in the database');

  // after input onChange - there is no message
  userEvent.clear(input);
  message = screen.queryByTestId('request-message');
  expect(message).not.toBeInTheDocument();

  // good email typed
  userEvent.type(input, 'spock@mock.com');
  userEvent.click(button);
  message = await screen.findByTestId('request-message');
  expect(message).toBeInTheDocument();
  expect(message).toHaveTextContent(
    'Request sent successfully. Please check your email.'
  );
});
