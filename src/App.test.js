import { render, screen } from '@testing-library/react';
import App from './App';

test('renders load sample data button', () => {
  render(<App />);
  expect(screen.getByText(/load sample data/i)).toBeInTheDocument();
});
