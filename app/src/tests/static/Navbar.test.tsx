import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider, { AuthContext } from '../../contexts/AuthContext';
import Navbar from '../../static/Navigation/Navbar';

describe('Display navbar correctly', () => {
  test('Display logo and links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const logo = screen.getByText(/cookbook/i);
    expect(logo).toBeInTheDocument();

    const desktopNav = screen.getByTestId('desktop-nav');
    expect(desktopNav).toBeInTheDocument();

    const mobileNav = screen.getByTestId('mobile-nav');
    expect(mobileNav).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(10);
  });

  test('Display signin and signup istead of logout when user is not logged in', () => {
    render(
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </AuthContextProvider>
    );

    const signIn = screen.getByRole('link', { name: /sign in/i });
    expect(signIn).toBeInTheDocument();

    const signUp = screen.getByRole('link', { name: /sign up/i });
    expect(signUp).toBeInTheDocument();

    const logout = screen.queryByRole('link', { name: /logout/i });
    expect(logout).not.toBeInTheDocument();
  });

  test('Display logout instead of signin and signup when user is logged in', () => {
    const auth = { uid: 'mock' };
    const dispatchAuth = jest.fn();

    render(
      <AuthContext.Provider value={{ auth, dispatchAuth }}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </AuthContext.Provider>
    );

    const signIn = screen.queryByRole('link', { name: /sign in/i });
    expect(signIn).not.toBeInTheDocument();

    const signUp = screen.queryByRole('link', { name: /sign up/i });
    expect(signUp).not.toBeInTheDocument();

    const logout = screen.getByRole('link', { name: /logout/i });
    expect(logout).toBeInTheDocument();
  });
});
