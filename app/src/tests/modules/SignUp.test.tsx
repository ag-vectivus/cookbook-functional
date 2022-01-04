import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../../modules/auth/SignUp';
import userEvent from '@testing-library/user-event';
import messages from '../../config/messages';

describe('Display SignUp correctly', () => {
  test('SignUp renders correctly', () => {
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

  test('should show message that parameter (login or email) is not available', async () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    const button = screen.getByRole('button', { name: /sign up/i });
    let login = screen.getByRole('textbox', { name: /login/i });
    let email = screen.getByRole('textbox', { name: /email/i });
    let password = screen.getByLabelText(/password/i);

    // initial state - there is no message
    let message = screen.queryByTestId('request-message');
    expect(message).not.toBeInTheDocument();

    // pass bad data (login)
    userEvent.clear(login);
    userEvent.clear(email);
    userEvent.clear(password);

    userEvent.type(login, 'spock');
    userEvent.type(email, 'jeanluc@mock.com');
    userEvent.type(password, 'jeanluc123');

    userEvent.click(button);

    // there should be a message - login is not available
    message = await screen.findByTestId('request-message');
    expect(message).toBeInTheDocument();
    expect(message).toHaveTextContent(messages.LoginNotAvailable);

    // pass bad data (email)
    userEvent.clear(login);
    userEvent.clear(email);
    userEvent.clear(password);

    userEvent.type(login, 'jeanluc');
    userEvent.type(email, 'spock@mock.com');
    userEvent.type(password, 'jeanluc123');

    userEvent.click(button);

    // there should be a message - email is not available
    message = await screen.findByTestId('request-message');
    expect(message).toBeInTheDocument();
    expect(message).toHaveTextContent(messages.EmailNotAvailable);
  });

  test('should sign up after providing good data', async () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    const button = screen.getByRole('button', { name: /sign up/i });
    let login = screen.getByRole('textbox', { name: /login/i });
    let email = screen.getByRole('textbox', { name: /email/i });
    let password = screen.getByLabelText(/password/i);

    expect(button).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();

    // initial state - there is no message
    let message = screen.queryByTestId('request-message');
    expect(message).not.toBeInTheDocument();

    // pass good data - sign up
    userEvent.clear(login);
    userEvent.clear(email);
    userEvent.clear(password);

    userEvent.type(login, 'JeanLuc');
    userEvent.type(email, 'jeanluc@mock.com');
    userEvent.type(password, 'jeanluc123');

    userEvent.click(button);

    // there should be a message - sign up successfully
    message = await screen.findByTestId('request-message');
    expect(message).toBeInTheDocument();
    expect(message).toHaveTextContent(messages.AccountCreated);
  });
});
