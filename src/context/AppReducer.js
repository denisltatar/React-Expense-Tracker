// The purpose of this file:
// To be able to change the state and send this information down to a component in your project!
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                // Creating a new state (using spread operating here, we send our current state)
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !==
                action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                // action.payload is our physical transaction that we're adding
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}