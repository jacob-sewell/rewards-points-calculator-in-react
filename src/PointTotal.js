import React from 'react';
const formatNumber = new Intl.NumberFormat('en-US').format;

export default function PointTotal({ points }) {
    const pts = parseInt(points, 10);
    if (pts === 1) {
        return (<span className="point-total">1 point</span>);
    } else {
        return (<span className="point-total">{ formatNumber(pts) } points</span>);
    }
}
