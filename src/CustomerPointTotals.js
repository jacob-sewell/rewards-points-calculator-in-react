import React from 'react';
import PointTotal from './PointTotal';
import calculateRewardsPoints from './point-calculator/calc';

export default function CustomerPointTotals({ transactions }) {
    const customerPointTotals = (transactions || []).reduce(
        (ret, { customer, amount }) => {
            ret[customer] = (ret[customer] || 0) + calculateRewardsPoints(amount);
            return ret;
        },
        {}
    );

    return (<table className="customer-point-totals">
        <caption>Rewards Point Totals by Customer</caption>
        <thead>
            <tr>
                <th>Customer</th>
                <th>Total Points</th>
            </tr>
        </thead>
        <tbody>
            {
                Object.keys(customerPointTotals).sort().map(
                    (customer, idx) => <tr key={idx} className="customer-point-total-row">
                            <td>{ customer }</td>
                            <td><PointTotal points={ customerPointTotals[customer] } /></td>
                        </tr>
                )
            }
        </tbody>
    </table>);
}
