import logo from './logo.svg';
import useTransactions from './hooks/useTransactions';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('income');
  const { transactions, addIncome, addExpense} = useTransactions();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <img src={logo} className="h-16 w-16 mx-auto mb-4 animate-spin" alt="logo" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Budget Survivor</h1>
          <p className="text-gray-600 mb-6">Track My Money</p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 font-medium">Coming Soon!</p>
            <p className="text-green-600 text-sm mt-1">Your personal finance tracker is getting ready</p>
          
            {/* Replace with this input form */}
            <div className="mt-4 space-y-3">
              <p className="text-gray-800">Transactions: {transactions.length}</p>
              <div className="flex space-x-2 mb-4">
                <button
                  onClick={() => setActiveTab('income')}
                  className={`px-4 py-2 rounded ${
                    activeTab === 'income' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Add Income
                </button>
                <button
                  onClick={() => setActiveTab('expense')}
                  className={`px-4 py-2 rounded ${
                    activeTab === 'expense' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Add Expense
                </button>
              </div>
              {activeTab === 'income' && (
                <div className="bg-white p-3 rounded border">
                  <h3 className="font-semibold mb-2">Add Income</h3>
                  <input 
                    type="number" 
                    placeholder="Amount (e.g. 150)" 
                    className="w-full p-2 border rounded mb-2"
                    id="amount"
                  />
                  <input 
                    type="text" 
                    placeholder="Source (e.g. Uber driving)" 
                    className="w-full p-2 border rounded mb-2"
                    id="source"
                  />
                  <button 
                    onClick={() => {
                      const amount = document.getElementById('amount').value;
                      const source = document.getElementById('source').value;
                      if(amount && source && parseFloat(amount) > 0) {
                        addIncome(parseFloat(amount), source);
                        document.getElementById('amount').value = '';
                        document.getElementById('source').value = '';
                      } else if (parseFloat(amount) <= 0) {
                        alert('Income must be a positive amount!');
                      }
                    }}
                    className="bg-green-500 text-white px-4 py-2 rounded w-full"
                  >
                    Add Income
                  </button>
                  {/* Add this after your Add Income form
                  {transactions.length > 0 && (
                    <div className="bg-white p-3 rounded border mt-3">
                      <h3 className="font-semibold mb-2">Your Income</h3>
                      {transactions.map(transaction => (
                        <div key={transaction.id} className="border-b py-2">
                          <p className="font-medium">${transaction.amount}</p>
                          <p className="text-sm text-gray-600">{transaction.source}</p>
                          <p className="text-xs text-gray-400">{transaction.date}</p>
                        </div>
                      ))}
                    </div>
                  )} */}
                </div>
              )}
              {activeTab === 'expense' && (
                <div className="bg-white p-3 rounded border">
                  <h3 className="font-semibold mb-2">Add Expense</h3>
                  <p className="text-gray-500">Expense form coming soon!</p>
                <input 
                  type="number" 
                  placeholder="Amount (e.g. 25.50)" 
                  className="w-full p-2 border rounded mb-2"
                  id="expenseAmount"
                />
                <input 
                  type="text" 
                  placeholder="Description (e.g. Coffee, Groceries)" 
                  className="w-full p-2 border rounded mb-2"
                  id="expenseDescription"
                />
                <select 
                  className="w-full p-2 border rounded mb-2"
                  id="expenseCategory"
                >
                  <option value="food">Food</option>
                  <option value="transport">Transport</option>
                  <option value="housing">Housing</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="other">Other</option>
                </select>
                <button 
                  onClick={() => {
                    const amount = document.getElementById('expenseAmount').value;
                    const description = document.getElementById('expenseDescription').value;
                    const category = document.getElementById('expenseCategory').value;
                    
                    if(amount && description && parseFloat(amount) > 0) {
                      addExpense(parseFloat(amount), description, category);
                      document.getElementById('expenseAmount').value = '';
                      document.getElementById('expenseDescription').value = '';
                    } else if (parseFloat(amount) <= 0) {
                      alert('Expense must be a positive amount!');
                    }
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded w-full"
                >
                  Add Expense
                </button>
              </div>
            )}
            {/* Replace the existing income display with this: */}
            {transactions.length > 0 && (
              <div className="bg-white p-3 rounded border mt-3">
                <h3 className="font-semibold mb-2">Your Transactions</h3>
                
                {/* Show Income */}
                {transactions.filter(t => t.type === 'income').map(transaction => (
                  <div key={transaction.id} className="border-b py-2 bg-green-50">
                    <p className="font-medium text-green-600">+${transaction.amount}</p>
                    <p className="text-sm text-gray-600">{transaction.source}</p>
                    <p className="text-xs text-gray-400">{transaction.date}</p>
                  </div>
                ))}
                
                {/* Show Expenses */}
                {transactions.filter(t => t.type === 'expense').map(transaction => (
                  <div key={transaction.id} className="border-b py-2 bg-red-50">
                    <p className="font-medium text-red-600">-${transaction.amount}</p>
                    <p className="text-sm text-gray-600">{transaction.description} ({transaction.category})</p>
                    <p className="text-xs text-gray-400">{transaction.date}</p>
                  </div>
                ))}
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;