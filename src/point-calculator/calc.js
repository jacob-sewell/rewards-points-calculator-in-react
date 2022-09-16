import RULES from "./rules";

export default function calculate(amount, rules = RULES) {
    return rules.reduce(
        (ret, { calc }) => ret + calc(amount),
        0
    );
}
