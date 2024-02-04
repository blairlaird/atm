import React, { useState } from 'react';

function ATM() {
    const [accountBalance, setAccountBalance] = useState(1000); // Initial balance
    const [transactionAmount, setTransactionAmount] = useState('');
    const [transactionType, setTransactionType] = useState('');
    const [message, setMessage] = useState('');

    const handleTransaction = () => {
        const amount = parseFloat(transactionAmount);
        if (transactionType === 'withdraw' && amount > accountBalance) {
            setMessage("Insufficient funds for this withdrawal.");
            return;
        } else if (transactionType === 'deposit') {
            setAccountBalance(prev => prev + amount);
            setMessage(`Deposit successful: $${amount}`);
        } else if (transactionType === 'withdraw') {
            setAccountBalance(prev => prev - amount);
            setMessage(`Withdrawal successful: $${amount}`);
        }
        setTransactionAmount('');
    };

    return (
        <div className="atm-container">
            <h2>ATM</h2>
            <p>Balance: ${accountBalance.toFixed(2)}</p>
            <div>
                <select value={transactionType} onChange={e => setTransactionType(e.target.value)}>
                    <option value="">Select Transaction Type</option>
                    <option value="deposit">Deposit</option>
                    <option value="withdraw">Withdraw</option>
                </select>
                {transactionType && <div>
                    <input type="number" value={transactionAmount} onChange={e => setTransactionAmount(e.target.value)} placeholder="Enter amount" />
                    <button onClick={handleTransaction}>Execute</button>
                </div>}
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default ATM;