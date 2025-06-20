import useLocalStorage from './useLocalStorage';

function useTransactions() {
  // Store all transactions using your working localStorage hook
  const [transactions, setTransactions] = useLocalStorage('budgetData', []);
  
  // TODO: Add functions here
  const addIncome = (amount, source, status = 'received') => {
  const newIncome = {
    id: Date.now(),           // Unique timestamp ID
    type: 'income',
    amount: amount,
    source: source,
    status: status,
    date: new Date().toISOString().split('T')[0]  // Today's date
  };
  
  setTransactions([...transactions, newIncome]);  // Add to array
};
const addExpense = (amount, description, category = 'other') => {
  const newExpense = {
    id: Date.now(),
    type: 'expense',
    amount: amount,
    description: description,
    category: category,
    paymentStatus: 'paid',  // or 'unpaid'
    date: new Date().toISOString().split('T')[0]
  };
  
  setTransactions([...transactions, newExpense]);
};
  
  // Return everything the component needs
  return {
    transactions,        // The array of all transactions
    addIncome,        // We'll build these functions
    addExpense,
    // deleteTransaction,
    // getTotalIncome
  };
}

export default useTransactions;