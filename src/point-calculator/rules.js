const TWO_X_OVER_ONE_HUNDRED = {
    description: '2 points for every dollar over $100 (e.g. 40 points for $120).',
    calc: (amount) => Math.max(0, Math.floor(amount) - 100) * 2
};
const ONE_X_BETWEEN_FIFTY_AND_ONE_HUNDRED = {
    description: '1 point for every dollar over $50 but not over $100 (e.g. 50 points for $120).',
    calc: (amount) => Math.min(50, Math.max(0, Math.floor(amount) - 50))
};

const RULES = [TWO_X_OVER_ONE_HUNDRED, ONE_X_BETWEEN_FIFTY_AND_ONE_HUNDRED];

export default RULES;
