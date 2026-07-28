import { fromWritable } from "node:stream/iter";

/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */
type Quantity = {
    friedRice: number
    drinks: number
    member: boolean
} 
type Packages = {
    friedRice: number
    drinks: number
} 
let Packages: Packages = {
    friedRice: 18000,
    drinks: 5000
}
let Raka: Quantity = {
    friedRice: 3,
    drinks: 2,
    member: true
}
function countFood(): number {
    return Packages.friedRice * Raka.friedRice
}
function countDrinks(): number {
    return Packages.drinks * Raka.drinks
}
function countGrandTotal(): number {
    return Packages.friedRice * Raka.friedRice + Packages.drinks * Raka.drinks
}
function countTotal(): number {
    if(Raka.member == true){
        return (Packages.friedRice * Raka.friedRice + Packages.drinks * Raka.drinks) - 10000;
    } else {
        return Packages.friedRice * Raka.friedRice + Packages.drinks * Raka.drinks;
    }
}
console.log(`Total biaya makanan: ${countFood()}`)
console.log(`Total biaya minuman: ${countDrinks()}`)
console.log(`Total biaya sebelum diskon (jika ada): ${countGrandTotal()}`)
console.log(`Total biaya sesudah diskon (jika ada): ${countTotal()}`)