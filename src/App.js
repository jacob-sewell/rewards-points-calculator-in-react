import React, { useState } from 'react';
import CustomerPointTotals from './CustomerPointTotals';
import PointTotal from './PointTotal';
import RULES from './point-calculator/rules';
import { fetchRecentTransactions } from './data/transactions';
import './App.css';
import calculatePoints from './point-calculator/calc';

function App(props) {
  const [transactions, setTransactions] = useState(props.transactions || []);
  const loadTransactions = () => {
    fetchRecentTransactions()
      .then(({ transactions }) => transactions)
      .then(setTransactions);
  }

  return (
    <div className="App">
      <h1>Simple Rewards Points Calculator Using React</h1>
      <p>This project demonstrates loading a set of sales transactions, applying a rule to generate rewards points for each sale, and aggregating that data by customer.</p>
      <div>
        <button className="button load-sample-data" onClick={ loadTransactions }>Load Sample Data</button>
      </div>
      <h2>Rules in Use</h2>
      <ul className="rules-list">
        {
          RULES.map(
            ({ description }, idx) => <li key={idx}>{ description }</li>
          )
        }
      </ul>
      <p className="rules-note">
        <strong>Note:</strong> You can edit these rules in <code>src/point-calculator/rules.js</code> or pass custom rules directly to the point calculator function.
      </p>
      <div className="tables-container">
        <CustomerPointTotals transactions={transactions} />
        <table className="all-sales-transactions">
          <caption>All Sales Transactions</caption>
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            { transactions.map(({ customer, date, amount }, idx) => (<tr key={idx}><td>{date.toString()}</td><td>{customer}</td><td>{amount}</td><td><PointTotal points={calculatePoints(amount)} /></td></tr>)) }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
