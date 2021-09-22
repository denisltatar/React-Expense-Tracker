import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    // Pulling out the transactions information
    const { transactions } = useContext(GlobalContext);

    // This returns an array of amount values!
    const amounts = transactions.map(transaction => transaction.amount);

    // Taking each amount, filtering through to find positives, then adding this amount to variable called acc which is returned through reduce()
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);

      // Similary, we receive an array of amounts, filtering through to find the negative values and adding to acc which is returned through reduce()
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1)
      .toFixed(2);


    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p className="money minus">{expense}</p>
        </div>
      </div>
    )
}
