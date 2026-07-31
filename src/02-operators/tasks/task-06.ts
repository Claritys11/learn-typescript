/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

//Sebeumnya mohon maaf kalau ini mungkin menurut pembaca tidak cocok dengan apa tujuannya, karena tujuan di sini itu kurang spesifik. Alhasil hasilnya tidak maksimal, Tolong nanti soalnya dijelaskan lebi detail
type Cafe = {
    chargesHours: number
    discount: number

}

type Customer = {
    totalHours: number
    hours: number
    hoursMinutes: number

}
let Cafe: Cafe ={
    chargesHours: 8000,
    discount: 0.15
}
let CustomerHours: Customer = {
    totalHours: 8,
    hours: 7,
    hoursMinutes: 35
}

let totalCustomerInMinutes = CustomerHours.hours * 60 + CustomerHours.hoursMinutes
let remainingMinutes = CustomerHours.totalHours * 60
remainingMinutes -= totalCustomerInMinutes
let totalMinutes = CustomerHours.totalHours * 60
let totalPaymentBeforeDiscount = CustomerHours.totalHours * Cafe.chargesHours
let afterDiscount: number = 0

if(CustomerHours.totalHours > 5){
    afterDiscount =totalPaymentBeforeDiscount * Cafe.discount
} else{
    afterDiscount = totalPaymentBeforeDiscount
}
let discountAmmount = totalPaymentBeforeDiscount - afterDiscount
console.log(`Your total playing time in minutes for now: ${totalCustomerInMinutes}`);
console.log(`Your total playing time in minutes: ${totalMinutes}`);
console.log(`Your remaining time: ${remainingMinutes}`);
console.log(`Total billed hours: ${CustomerHours.totalHours}`);
console.log(`Your total payment before discount: ${totalPaymentBeforeDiscount}`);
console.log(`Your discount amount: ${discountAmmount}`);
console.log(`Your final payment ${afterDiscount}`);
