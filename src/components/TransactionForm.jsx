import { useState } from 'react'

function TransactionForm({ onAdd }) {
  const [title, setTitle]       = useState('')
  const [amount, setAmount]     = useState('')
  const [type, setType]         = useState('expense')
  const [category, setCategory] = useState('Food')
  const [date, setDate]         = useState('')

  function handleSubmit() {
    // Validation — never trust the user
    if (!title.trim() || !amount || !date) {
      alert('Please fill in title, amount, and date.')
      return
    }
    if (Number(amount) <= 0) {
      alert('Amount must be greater than zero.')
      return
    }

    const newTransaction = {
      id: Date.now(), // unique enough for our case
      title: title.trim(),
      amount: Number(amount),
      type,
      category,
      date
    }

    onAdd(newTransaction)  // calls handleAdd in App.jsx

    // Reset form after submit
    setTitle('')
    setAmount('')
    setType('expense')
    setCategory('Food')
    setDate('')
  }

  return (
    <div className="transaction-form">
      <h3>Add Transaction</h3>

      <div className="form-group">
        <input
          type="text"
          placeholder="Title (e.g. Salary)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="form-group">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="form-group">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Salary">Salary</option>
          <option value="Freelance">Freelance</option>
          <option value="Food">Food</option>
          <option value="Housing">Housing</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      <div className="form-group">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button type="button" className="submit-btn" onClick={handleSubmit}>
        Add Transaction
      </button>
    </div>
  )
}

export { TransactionForm }