import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const headingElement = screen.getByText(/hello, this is my react frontend!/i);
  expect(headingElement).toBeInTheDocument();
});