const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/finance', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a Transaction schema
const transactionSchema = new mongoose.Schema({
  type: String,
  amount: Number,
  description: String,
  date: Date,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

// Routes

// Get all transactions
app.get('/transactions', async (req, res) => {
  const { type, date } = req.query;
  let filter = {};
  if (type) filter.type = type;
  if (date) filter.date = date;
  const transactions = await Transaction.find(filter);
  res.json(transactions);
});

// Create a new transaction
app.post('/transactions', async (req, res) => {
  const transaction = new Transaction(req.body);
  await transaction.save();
  res.status(201).json(transaction);
});

// Update a transaction
app.put('/transactions/:id', async (req, res) => {
  const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(transaction);
});

// Delete a transaction
app.delete('/transactions/:id', async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

