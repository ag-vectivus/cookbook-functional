import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App displays correctly', () => {
  test('Display navbar', () => {
    render(<App />);

    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });

  test('Display header', () => {
    render(<App />);

    const headerTitle = screen.getByTestId('header-cookbook');

    expect(headerTitle).toBeInTheDocument();
  });

  test('Display content', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { name: /cookbook/i });
    expect(heading).toBeInTheDocument();

    const noContent = screen.getByText(/there is no content yet/i);
    expect(noContent).toBeInTheDocument();
  });

  test('Display footer', () => {
    render(<App />);

    const copyright = screen.getByText(/cookbook \| 2021/i);
    expect(copyright).toBeInTheDocument();
  });
});
