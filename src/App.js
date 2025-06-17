import logo from './logo.svg';

function App() {
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;