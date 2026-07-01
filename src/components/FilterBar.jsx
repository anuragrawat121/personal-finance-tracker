export function FilterBar({ filters, onFilterChange }) {
  const hasActiveFilters =
    filters.type !== 'all' || filters.category !== 'all' || filters.search !== ''

  return (
    <div className="filter-bar">
      <h3>Filter Transactions</h3>

      <div className="filter-controls">
        <div className="filter-group filter-group-search">
          <label className="filter-label" htmlFor="filter-search">
            Search
          </label>
          <input
            id="filter-search"
            type="text"
            placeholder="Search by title..."
            value={filters.search}
            onChange={(e) => onFilterChange({ search: e.target.value })}
            className="filter-search"
          />
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="filter-type">
            Type
          </label>
          <select
            id="filter-type"
            value={filters.type}
            onChange={(e) => onFilterChange({ type: e.target.value })}
            className="filter-select"
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="filter-category">
            Category
          </label>
          <select
            id="filter-category"
            value={filters.category}
            onChange={(e) => onFilterChange({ category: e.target.value })}
            className="filter-select"
          >
            <option value="all">All Categories</option>
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

        <button
          type="button"
          className="clear-btn"
          disabled={!hasActiveFilters}
          onClick={() => onFilterChange({ type: 'all', category: 'all', search: '' })}
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}