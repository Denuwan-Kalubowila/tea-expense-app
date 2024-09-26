import getAllExpenses from "@/app/actions/getransactionList";
import { Transaction } from "@/types/Transaction";
import { CalendarIcon, DollarSignIcon } from "lucide-react"
const MonthHistory = async () => {
    const { transactions, error } = await getAllExpenses();
    
    if (error) {
        return (
            <div className="container mx-auto mt-8 p-4">
                <h2 className="font-sans font-semibold text-2xl mb-4">Month History</h2>
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-8 p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md">
      <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-gray-800 border-b pb-2">Month History</h2>
      <ul className="space-y-4">
        {transactions && transactions.map((transaction: Transaction) => (
          <li key={transaction.id} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
            <div className="flex items-center mb-2 sm:mb-0">
              <DollarSignIcon className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-sans text-lg text-gray-700">{transaction.reason}</span>
            </div>
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto">
              <span className="font-sans text-xl font-semibold text-gray-900">
                ${transaction.cost.toFixed(2)}
              </span>
              <div className="flex items-center ml-4 text-sm text-gray-500">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>{new Date(transaction.createdAT).toLocaleDateString()}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    );
}

export default MonthHistory;
