import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Aside from '../../static/Aside/Aside';
import userEvent from '@testing-library/user-event';
import messages from '../../config/messages';

describe('Display Aside correctly', () => {
  test('Display about section correctly', () => {
    render(
      <BrowserRouter>
        <Aside />
      </BrowserRouter>
    );

    const aboutImg = screen.getByAltText(/sweeties/i);
    expect(aboutImg).toBeInTheDocument();

    const aboutBtn = screen.getByRole('link', { name: /more about us/i });
    expect(aboutBtn).toBeInTheDocument();
  });

  test('Display newsletter section correctly', () => {
    render(
      <BrowserRouter>
        <Aside />
      </BrowserRouter>
    );

    const newsletterHeading = screen.getByRole('heading', {
      name: /never miss a recipe/i,
    });
    expect(newsletterHeading).toBeInTheDocument();

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    expect(emailInput).toBeInTheDocument();

    const subscribeBtn = screen.getByRole('button', { name: /subscribe/i });
    expect(subscribeBtn).toBeInTheDocument();
  });

  test('Newsletter form works properly', async () => {
    render(
      <BrowserRouter>
        <Aside />
      </BrowserRouter>
    );

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const subscribeBtn = screen.getByRole('button', { name: /subscribe/i });

    userEvent.clear(emailInput);
    userEvent.type(emailInput, 'sulu@mock.com');
    userEvent.click(subscribeBtn);

    const response = await screen.findByText(messages.NewsletterFormSuccess);
    expect(response).toBeInTheDocument();
  });

  test('Display pupular recipes correctly', async () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });

    render(
      <BrowserRouter>
        <Aside />
      </BrowserRouter>
    );

    const popularRecipesHeading = screen.getByRole('heading', {
      name: /popular recipes/i,
    });
    expect(popularRecipesHeading).toBeInTheDocument();

    const popularRecipesCollection = await screen.findAllByText(/views: /i);
    await waitFor(() => {
      expect(popularRecipesCollection).toHaveLength(3);
    });
  });
});
