import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    // Getting the sign for the amount
    const sign = transaction.amount < 0 ? '-' : '+';

    // Pulling out the delete transactions action
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className={transaction.amount > 0 ? "plus" : "minus"}> 
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button 
            onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
