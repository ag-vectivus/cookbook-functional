import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from '../../contexts/AuthContext';
import SignIn from '../../modules/auth/SignIn';
import userEvent from '@testing-library/user-event';

describe('Test SignIn', () => {
  test('Display SignIn correctly', () => {
    render(
      <AuthContextProvider>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </AuthContextProvider>
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

  test('Handle user event', async () => {
    render(
      <AuthContextProvider>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </AuthContextProvider>
    );

    const button = screen.getByRole('button', { name: /sign in/i });

    // no data provided
    userEvent.click(button);
    let message = await screen.findByTestId('error-message');
    expect(message).toBeInTheDocument();

    // wrong data provided
    let email = screen.getByLabelText(/email/i);
    userEvent.clear(email);
    userEvent.type(email, 'spock@vulcan.com');

    let errorMessage = await screen.queryByTestId('error-message');
    expect(errorMessage).not.toBeInTheDocument();

    let password = screen.getByLabelText(/password/i);
    userEvent.clear(password);
    userEvent.type(password, 'spock123');

    userEvent.click(button);
    message = await screen.findByTestId('error-message');
    expect(message).toBeInTheDocument();

    // good data provided
    userEvent.clear(email);
    userEvent.type(email, 'spock@mock.com');

    userEvent.clear(password);
    userEvent.type(password, 'spock123');

    userEvent.click(button);

    errorMessage = await screen.queryByTestId('error-message');
    expect(errorMessage).not.toBeInTheDocument();
  });
});
