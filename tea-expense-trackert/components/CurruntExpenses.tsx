import currentExpences from "@/app/actions/getuserCurrentExpences"
import { addCommas } from "@/lib/utils"

const CurruntExpenses = async() => {
    const {balance}= await currentExpences()
  return (
        <div className="container mx-auto mt-8 p-4 bg-white shadow-md rounded text-center">
            <h4 className="font-sans font-semibold text-xl mb-2 text-gray-700">Your Current Expenses</h4>
            <h2 className="font-sans font-bold text-4xl text-red-500">
                {addCommas(balance ?? 0)} LKR
            </h2>
        </div>
  )
}

export default CurruntExpenses