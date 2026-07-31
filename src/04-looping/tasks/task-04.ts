/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */
const sales = [125000,350000,78000,910000,150000,420000,275000,99000,640000,18000]
let totalSales: number = 0
let transactionsworth: number =0
let max: number=0
let min: number=sales[0]
for(let i = 0; i < sales.length; i++){
    totalSales += sales[i]
    if(sales[i] >= 300000){
        transactionsworth++
    }
    if(max <sales[i]){
        max = sales[i]
    }
    if(min > sales[i]){
        min = sales[i]
    }
}
let average: number = totalSales / sales.length
console.log(`Total Sales Revenue: ${totalSales}`)
console.log(`Highest Transaction: ${max}`)
console.log(`Lowest Transaction: ${min}`)
console.log(`Number of transactions worth RP300.000 or more: ${transactionsworth}`)
console.log(`Averqage Sales Revenue: ${average}`)