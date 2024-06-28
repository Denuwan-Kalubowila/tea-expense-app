"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import getAllExpensesMonth from '@/app/actions/getMonthlyData';
import { Transaction } from '@/types/Transaction';


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
interface ChartData {
    series: { name: string; data: number[] }[];
    categories: string[];
}


const MonthlyComparisonChart = () => {
    const [chartData, setChartData] = useState<ChartData>({ series: [], categories: [] });

    useEffect(() => {
        const fetchData = async () => {
            const {thisMonthTransactions,lastMonthTransactions,errorz}=await getAllExpensesMonth()
            if (errorz) {
                return (
                    <div className="container mx-auto mt-8 p-4">
                        <h2 className="font-sans font-semibold text-2xl mb-4">Month History</h2>
                        <p className="text-red-500">{errorz}</p>
                    </div>
                );
            }

            const formatData = (transactions:Transaction[]) => {
                const dailyExpenses:{[date:string]:number} = {};
                transactions.forEach(transaction => {
                    const date = new Date(transaction.createdAT).toISOString().split('T')[0];
                    if (!dailyExpenses[date]) {
                        dailyExpenses[date] = 0;
                    }
                    dailyExpenses[date] += transaction.cost;
                });
                return dailyExpenses;
            };

            const thisMonthData = formatData(thisMonthTransactions);
            const lastMonthData = formatData(lastMonthTransactions);

            const allDates = Array.from(new Set([...Object.keys(thisMonthData), ...Object.keys(lastMonthData)])).sort();

            const thisMonthSeries = allDates.map(date => thisMonthData[date] || 0);
            const lastMonthSeries = allDates.map(date => lastMonthData[date] || 0);

            setChartData({
                series: [
                    { name: 'This Month', data: thisMonthSeries },
                    { name: 'Last Month', data: lastMonthSeries }
                ],
                categories: allDates
            });
        };

        fetchData();
    }, []);

    const chartOptions = {
        chart: {
            type: 'area',
            height: 450
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: chartData.categories
        },
        yaxis: {
            title: {
                text: 'Expenses (LKR)'
            }
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            },
        },
    };

    return (
        <div className="container mx-auto p-4">
            <Chart
                options={chartOptions}
                series={chartData.series}
                type="area"
                height={350}
            />
        </div>
    );
};

export default MonthlyComparisonChart;
