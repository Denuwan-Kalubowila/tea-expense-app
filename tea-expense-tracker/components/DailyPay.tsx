"use client"
import { useRef } from "react"
import addPayment from "@/app/actions/addDailyPay"
import {toast} from "react-toastify"

const DailyPay = () => {
    const formRef =useRef<HTMLFormElement>(null);
    const clientAction= async (formData:FormData)=>{
        const {data,error}=await addPayment(formData)
        if (error){
            toast.error(error)
        }else{
            toast.success("Your payment added.")
            formRef.current?.reset();
        }
    }

    return (
        <div className="container mx-auto mt-8 p-4 max-w-md">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-6 text-green-800 text-center">
                What is Your Payment Today?
            </h2>
            <form action={clientAction} ref={formRef} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 justify-center items-center">
                <p className="text-gray-600 text-lg italic mt-4 text-center">Add today's expenses</p>
                <div className="mb-4">
                    <label htmlFor="reason" className="block text-gray-700 text-md font-bold mb-2">Reason</label>
                    <input
                        type="text"
                        name="reason"
                        id="reason"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="cost" className="block text-gray-700 text-md font-bold mb-2">Cost</label>
                    <input
                        type="number"
                        name="cost"
                        id="cost"
                        step={0.01}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default DailyPay