function TransactionItem({ transaction, onDelete }) {
  const { id, title, amount, type, category, date } = transaction

  return (
    <div className={`transaction-item ${type}`}>
      <div className="transaction-info">
        <span className="transaction-title">{title}</span>
        <span className="transaction-category">{category}</span>
        <span className="transaction-date">{date}</span>
      </div>
      <div className="transaction-right">
        <span className="transaction-amount">
          {type === 'expense' ? '-' : '+'}${amount}
        </span>
        <button
          className="delete-btn"
          onClick={() => onDelete(id)}
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export { TransactionItem }