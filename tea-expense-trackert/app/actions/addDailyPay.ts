"use server"

import { auth } from "@clerk/nextjs/server";
import {db} from "../../lib/db"
import { revalidatePath } from "next/cache";

interface DailyPayment{
    reason:string;
    cost:number;
}
interface DailyPaymentResult{
    data?:DailyPayment;
    error?:string; 
}

async function addPayment(formData:FormData): Promise <DailyPaymentResult> {
    const reasonData = formData.get("reason");
    const costData = formData.get("cost");

    if (!reasonData || reasonData === "" || !costData ){
        return {error:`Reason or amount is missing`};
    }

    const reason = reasonData.toString();
    const cost = parseFloat(costData.toString());

    const {userId}=auth()
    if (!userId ){
        return {error:`User not found`};
    }

    try {
        const paymentData:DailyPayment= await db.transaction.create({
            data:{
                reason,
                cost,
                userId,
            }
        });
        revalidatePath("/");
        return {
            data:paymentData
        }
    } catch (error) {
       return {error:"Transaction not added..."} 
    }

}

export default addPayment;