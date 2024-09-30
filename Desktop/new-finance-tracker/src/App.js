import React, { useState } from 'react';

function App() {
  // State for transactions
  const [transactions, setTransactions] = useState([]);
  
  // Form input states
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [filterType, setFilterType] = useState(''); // State for filtering transactions
  const [filterDate, setFilterDate] = useState(''); // State for filtering transactions

  // Function to handle adding a new transaction
  const addTransaction = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate form fields
    if (!type || !amount || !description || !date) {
      alert('Please fill in all fields.'); // Alert if fields are empty
      return;
    }

    const newTransaction = {
      id: Date.now(), // Unique ID for each transaction
      type,
      amount: parseFloat(amount), // Convert amount to number
      description,
      date
    };
    
    // Update transactions state
    setTransactions([...transactions, newTransaction]);

    // Clear form inputs
    setType('');
    setAmount('');
    setDescription('');
    setDate('');
  };

  // Function to delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  // Calculate total income and expenses
  const totalIncome = transactions
    .filter(transaction => transaction.type === 'Income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = transactions
    .filter(transaction => transaction.type === 'Expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = totalIncome - totalExpenses;

  // Filter transactions by type and date
  const filteredTransactions = transactions.filter(transaction => {
    const matchesType = filterType ? transaction.type === filterType : true;
    const matchesDate = filterDate ? transaction.date === filterDate : true;
    return matchesType && matchesDate;
  });

  return (
    <div>
      <h1>Personal Finance Tracker</h1>
      <form onSubmit={addTransaction}>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="">Select Type</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>

        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} 
          required
        />

        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
          required
        />

        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)} 
          required
        />

        <button type="submit">Add Transaction</button>
      </form>

      {/* Summary Display */}
      <h2>Summary</h2>
      <p>Total Income: ${totalIncome.toFixed(2)}</p>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <p>Balance: ${balance.toFixed(2)}</p>

      {/* Filter Transactions */}
      <h2>Filter Transactions</h2>
      <label>Filter by Type:</label>
      <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
        <option value="">All</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <label>Filter by Date:</label>
      <input
        type="date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)} 
      />

      {/* Transaction List */}
      <h2>Transactions</h2>
      <ul>
        {filteredTransactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.type}: ${transaction.amount} on {transaction.date} - {transaction.description}
            <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;