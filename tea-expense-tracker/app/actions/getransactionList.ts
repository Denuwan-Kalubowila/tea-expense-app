"use server"
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { Transaction } from "@/types/Transaction";


async function getAllExpenses():Promise<{
    transactions?:Transaction[];
    error?:string
}>{
  const {userId} =auth()
  if (!userId){
    return {error:"User Not found"}
  }

  try {
    const expenses = await db.transaction.findMany({
        where:{userId},
        orderBy:{
            createdAT: 'desc'
        },
    })
    return {transactions:expenses}
  } catch (error) {
    return {error:"Database Error"}
  }
}

export default getAllExpenses;