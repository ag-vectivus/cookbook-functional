import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Contact from '../../pages/Contact';
import messages from '../../config/messages';

describe('Contact page behaviour', () => {
  test('Contact page displays correctly', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const heading = screen.getByRole('heading', { name: /contact/i });
    expect(heading).toBeInTheDocument();

    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(4);

    const button = screen.getByRole('button', { name: /send/i });
    expect(button).toBeInTheDocument();
  });

  test('Contact page form works properly', async () => {
    render(<Contact />);

    const name = screen.getByLabelText(/name/i);
    expect(name).toBeInTheDocument();

    const email = screen.getByLabelText(/email/i);
    expect(email).toBeInTheDocument();

    const subject = screen.getByLabelText(/subject/i);
    expect(subject).toBeInTheDocument();

    const message = screen.getByLabelText(/message/i);
    expect(message).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /send/i });
    expect(button).toBeInTheDocument();

    userEvent.clear(name);
    userEvent.clear(email);
    userEvent.clear(subject);
    userEvent.clear(message);

    userEvent.type(name, 'Spock');
    userEvent.type(email, 'spock@mock.com');
    userEvent.type(subject, 'It is illogical...');
    userEvent.type(message, 'It is illogical, captain.');

    userEvent.click(button);

    const response = await screen.findByTestId('request-message');
    expect(response).toBeInTheDocument();
    expect(response).toHaveTextContent(messages.ContactFormSuccess);
  });
});
