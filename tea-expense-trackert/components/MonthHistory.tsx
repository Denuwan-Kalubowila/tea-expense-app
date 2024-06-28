import getAllExpenses from "@/app/actions/getransactionList";
import { Transaction } from "@/types/Transaction";

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
        <div className="container mx-auto mt-8 p-4">
            <h2 className="font-sans font-semibold text-2xl mb-4">Month History</h2>
            <ul className="list-disc list-inside">
                {transactions && transactions.map((transaction: Transaction) => (
                    <li key={transaction.id} className="font-sans text-lg mb-2 ">
                        {transaction.reason} : <span className="font-semibold">{transaction.cost.toFixed(2)}</span> <span> on :{transaction.createdAT.toISOString().split("T")[0]}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MonthHistory;
