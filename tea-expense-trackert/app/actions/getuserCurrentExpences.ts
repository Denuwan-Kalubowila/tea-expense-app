"use server"
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";


async function currentExpences():Promise<{
    balance?:number;
    error?:string
}>{
  const {userId} =auth()
  if (!userId){
    return {error:"User Not found"}
  }

  try {
    const expenseses = await db.transaction.findMany({
        where:{userId}
    })
    const current = expenseses.reduce((sum,expense)=> sum+expense.cost,0)
    return {balance:current}
  } catch (error) {
    return {error:"Database Error"}
  }
}

export default currentExpences;