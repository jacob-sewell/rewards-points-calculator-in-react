import { render, screen } from '@testing-library/react';
import CustomerPointTotals from './CustomerPointTotals';

const transactions = [
    { customer: 'Foo Inc', amount: 100.00 }, // 50 points
    { customer: 'Foo Inc', amount: 120.00 }, // 90 points
    { customer: 'Bar Inc', amount: 45.00 }, // 0 points
    { customer: 'Bar Inc', amount: 49.00 }, // 0 points
];

test('renders rewards point totals table', () => {
  render(<CustomerPointTotals transactions={transactions} />);
  expect(screen.getByText(/rewards point totals by customer/i)).toBeInTheDocument();

  // There are definitely better ways to test the content of the table
  expect(screen.getByText(/foo inc/i)).toBeInTheDocument();
  expect(screen.getByText(/^140 points$/i)).toBeInTheDocument();
  expect(screen.getByText(/bar inc/i)).toBeInTheDocument();
  expect(screen.getByText(/^0 points$/i)).toBeInTheDocument();
});
