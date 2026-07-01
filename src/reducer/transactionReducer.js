export function transactionReducer(state, action) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [action.payload, ...state]

    case 'DELETE_TRANSACTION':
      return state.filter(t => t.id !== action.payload)

    default:
      return state
  }
}