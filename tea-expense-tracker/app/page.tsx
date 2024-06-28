import CurruntExpenses from "@/components/CurruntExpenses"
import DailyPay from "@/components/DailyPay"
import MonthHistory from "@/components/MonthHistory"
import MonthlyComparisonChart from "@/components/MonthlyChart"
import Welcome from "@/components/Welcome"
import { currentUser } from "@clerk/nextjs/server"

const HomePage = async () => {
    const user = await currentUser()

    return (
      <>
        {user ? (
                <main className="p-4 justify-center items-center">
                    <h1 className="font-sans font-semibold text-3xl text-center mb-6">Hello, {user.firstName}</h1>
                    <div className="space-y-6">
                        <CurruntExpenses />
                        <DailyPay />
                        <MonthHistory />
                        <MonthlyComparisonChart/>
                    </div>
                </main>
        ) : (
                <Welcome />
        )}
      </>
    )
}

export default HomePage