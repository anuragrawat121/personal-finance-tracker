import { TransactionItem } from './TransactionItem'

function TransactionList({ transactions, onDelete }) {
  return (
    <div className="transaction-list">
      <h3>Transactions</h3>

      {transactions.length === 0 && (
        <p className="empty-state">No transactions yet. Add one above.</p>
      )}

      {transactions.map(transaction => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export { TransactionList }