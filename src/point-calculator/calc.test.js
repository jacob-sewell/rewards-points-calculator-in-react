import calculatePoints from './calc';

describe('Test point calculator with default rules', () => {
    it('returns 0 for a negative number', () => {
        expect(calculatePoints(-10.0)).toEqual(0);
    });
    it('returns 90 for 120', () => {
        expect(calculatePoints(120.0)).toEqual(90);
    });
    it('returns an integer even for long float inputs', () => {
        for (let i = 90.001; i <= 150; i += 0.001) {
            const points = calculatePoints(i);
            expect(points).toEqual(Math.floor(points));
        }
    });
});

describe('Test point calculator with custom rules', () => {
    const rules = [
        { calc: (n) => n },
        { calc: (n) => 1 }
    ];
    it('returns -9 for -10', () => {
        expect(calculatePoints(-10.0, rules)).toEqual(-9);
    });
    it('returns 101 for 100', () => {
        expect(calculatePoints(100.0, rules)).toEqual(101);
    });
});
