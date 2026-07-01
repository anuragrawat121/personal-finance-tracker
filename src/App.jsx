import { useReducer, useState, useMemo, useEffect } from 'react'
import { Header } from './components/Header'
import { SummaryCards } from './components/SummaryCards'
import { TransactionForm } from './components/TransactionForm'
import { TransactionList } from './components/TransactionList'
import { transactions as initialData } from './data/transactions'
import { transactionReducer } from './reducer/transactionReducer'
import { FilterBar } from './components/FilterBar'

const STORAGE_KEY = 'transactions'

function loadTransactions(initial) {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : initial
  } catch (error) {
    console.error('Error reading localStorage:', error)
    return initial
  }
}

export default function App() {
  const [transactions, dispatch] = useReducer(
    transactionReducer,
    initialData,
    loadTransactions
  )

  const [filters, setFilters] = useState({
    type: 'all',
    category: 'all',
    search: ''
  })

  // Save to localStorage whenever transactions change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
    } catch (error) {
      console.error('Error writing localStorage:', error)
    }
  }, [transactions])

  // Derived state — computed from transactions + filters, never stored
  const filteredTransactions = useMemo(() => {
    return transactions
      .filter(t => filters.type === 'all' || t.type === filters.type)
      .filter(t => filters.category === 'all' || t.category === filters.category)
      .filter(t => t.title.toLowerCase().includes(filters.search.toLowerCase()))
  }, [transactions, filters])

  function handleAdd(newTransaction) {
    dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction })
  }

  function handleDelete(id) {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id })
  }

  function handleFilterChange(newFilters) {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <SummaryCards transactions={transactions} />
        <TransactionForm onAdd={handleAdd} />
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />
        <TransactionList transactions={filteredTransactions} onDelete={handleDelete} />
      </main>
    </div>
  )
}