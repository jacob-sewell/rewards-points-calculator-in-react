import { render, screen } from '@testing-library/react';
import PointTotal from './PointTotal';

test('formats numbers properly', () => {
  render(<PointTotal points="1000" />);
  expect(screen.getByText(/^1,000 points$/i)).toBeInTheDocument();
});

test('renders 1 point properly', () => {
  render(<PointTotal points="1" />);
  expect(screen.getByText(/^1 point$/i)).toBeInTheDocument();
});

test('renders 0 points properly', () => {
  render(<PointTotal points="0" />);
  expect(screen.getByText(/^0 points$/i)).toBeInTheDocument();
});
