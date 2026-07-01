export const SummaryCard = ({ title, amount, type }) => {
  return (
    <div className={`summary-card ${type}`}>
      <p className="card-title">{title}</p>
      <h2 className="card-amount">${amount}</h2>
    </div>
  )
}
