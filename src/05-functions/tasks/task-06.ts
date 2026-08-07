/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

function calculateTotalSales(sales: number[]): number {
    let total: number = 0
    for(const sale of sales){
        total += sale
    }
    return total
}

function findHighestTransaction(sales: number[]): number {
    let highest = 0
    for(const sale of sales){
        if(sale > highest){
            highest = sale
        }
    }
    return highest
}

function findLowestTransaction(sales: number[]): number {
    let lowest = sales[0]
    for(const sale of sales){
        if(lowest > sale){
            lowest = sale
        }
    }
    return lowest
}

function calculateAverageSale(sales: number[]): number {
    let averageS: number = 0
    for(const sale of sales){
        averageS += sale
    }
    let average: number = averageS / sales.length
    return average
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
    let count: number = 0
    for(const sale of sales){
        if(sale> 500000){
            count++
        }
    }
    return count
}