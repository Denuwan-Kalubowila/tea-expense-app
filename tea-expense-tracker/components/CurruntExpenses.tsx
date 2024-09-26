import currentExpences from "@/app/actions/getuserCurrentExpences"
import { addCommas } from "@/lib/utils"

const CurruntExpenses = async() => {
    const {balance}= await currentExpences()
  return (
    <div className="container mx-auto mt-4 sm:mt-8 p-6 bg-gradient-to-br from-white to-green-50 shadow-lg rounded-xl text-center">
    <h4 className="font-sans text-lg sm:text-xl font-semibold mb-2 text-gray-700">
      Your Current Expenses
    </h4>
    <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 transition-colors duration-300 ease-in-out hover:text-green-600">
      {addCommas(balance??0)} LKR
    </h2>
    <p className="mt-2 text-sm text-gray-500">Updated just now</p>
  </div>
  )
}

export default CurruntExpenses