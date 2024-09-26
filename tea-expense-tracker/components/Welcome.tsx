import { SignInButton } from "@clerk/nextjs"
import { LeafIcon } from "lucide-react"
import Button from "./ui/Button"

const Welcome = async () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full space-y-8 bg-white p-6 sm:p-10 rounded-xl shadow-lg">
                <div className="text-center">
                    <LeafIcon className="mx-auto h-12 w-12 text-green-600" />
                    <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900">Welcome to TeaTrack</h1>
                    <p className="mt-2 text-sm sm:text-base text-gray-600">
                    Effortlessly manage your expenses in tea plantations across Sri Lanka
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    
                    <SignInButton className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"/>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        New to TeaTrack?{" "}
                        <a href="#" className="font-medium text-green-600 hover:text-green-500">
                            Create an account
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome