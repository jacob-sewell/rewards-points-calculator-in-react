import { fetchRecentTransactions } from "./transactions";

describe('can generate mock data', () => {
    const limit = 100;
    it('generates expected amount of data', async () => {
        const data = await fetchRecentTransactions({ limit });
        expect(data.transactions.length).toEqual(limit);
    });
    it('generates at least one repeat customer', async () => {
        const data = await fetchRecentTransactions({ limit });
        const customers = [...new Set(data.transactions.map(({ customer }) => customer))];
        expect(customers.length).toBeLessThan(limit);
    });
});