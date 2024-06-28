"use server"

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { Transaction } from "@/types/Transaction";


async function getAllExpensesMonth():Promise<{
    thisMonthTransactions:Transaction[];
    lastMonthTransactions:Transaction[];
    errorz?:string
}>{
  const {userId} =auth()
  if (!userId){
    return {thisMonthTransactions:[],lastMonthTransactions:[],errorz:"User Not found"}
  }

  try {
    // Get from this month data 
    const now =new Date()
    const thisMonthStart=new Date(now.getFullYear(),now.getMonth(),1)
    const thisMonthEnd=new Date(now.getFullYear(),now.getMonth()+1,0)
    //Get from last month 
    const lastMonthStart=new Date(now.getFullYear(),now.getMonth()-1,0)
    const lastMonthEnd=new Date(now.getFullYear(),now.getMonth(),1)
    const thisExpenses = await db.transaction.findMany({
        where:{
            userId,
            createdAT: {
                gte:thisMonthStart,
                lte:thisMonthEnd,
            }
        },
    })
    const lastExpenses = await db.transaction.findMany({
        where:{
            userId,
            createdAT: {
                gte:lastMonthStart,
                lte:lastMonthEnd,
            }
        },
    })
    return {
        thisMonthTransactions:thisExpenses,
        lastMonthTransactions:lastExpenses
    }
  } catch (error) {
    return {thisMonthTransactions:[],lastMonthTransactions:[],errorz:"Database Error"}
  }
}

export default getAllExpensesMonth;