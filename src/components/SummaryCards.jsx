import { SummaryCard } from './SummaryCard.jsx'

export const SummaryCards = ({ transactions }) => {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpenses

  return (
    <div className="summary-cards">
      <SummaryCard title="Balance" amount={balance} type="balance" />
      <SummaryCard title="Total Income" amount={totalIncome} type="income" />
      <SummaryCard title="Total Expense" amount={totalExpenses} type="expense" />
    </div>
  )
}
