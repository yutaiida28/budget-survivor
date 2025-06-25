function TransactionItem({ transaction, onDelete }) {
  if (transaction.type === 'income') {
    return (
      <div className="border-b py-2 bg-green-50">
        <p className="font-medium text-green-600">+${transaction.amount}</p>
        <p className="text-sm text-gray-600">{transaction.source}</p>
        <p className="text-xs text-gray-400">{transaction.date}</p>
        <button className="text-sm text-red-600" onClick={() => onDelete(transaction.id)}>Delete</button>
      </div>
    );
  } else {
    return (
      <div className="border-b py-2 bg-red-50">
        <p className="font-medium text-red-600">-${transaction.amount}</p>
        <p className="text-sm text-gray-600">{transaction.description}</p>
        <p className="text-xs text-gray-400">{transaction.date}</p>
        <button className="text-sm text-red-600" onClick={() => onDelete(transaction.id)}>Delete</button>
      </div>
    );
  }
}

export default TransactionItem;  // ✅ Now on its own line!