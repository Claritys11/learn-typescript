/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */
type Hotel = {
    roomPrice: number
    nightStayed: number
    serviceCharge: number
    tax: number
    vipMember: boolean
}
let Guest: Hotel = {
    roomPrice: 650000,
    nightStayed: 4,
    serviceCharge: 120000,
    tax: 0.11,
    vipMember: true
}

let discounted:number = 0
let discountedd:number = 0
let roomSubtotal = Guest.roomPrice * Guest.nightStayed
if(Guest.vipMember){
    discountedd = roomSubtotal * 0.12
    discounted = roomSubtotal - discountedd
} else {
    discounted = roomSubtotal
}

let taxed = discounted * Guest.tax
let finalPayment = taxed + Guest.serviceCharge
console.log(`This is your detailed payment:`);
console.log(`Your price for room subtotal: ${roomSubtotal}`);
console.log(`Your price after discounted: ${discounted}`);
console.log(`Your price after tax: ${taxed}`);
console.log(`Your Final Payment (After Service Charge) ${finalPayment}`);


if(Guest.nightStayed >= 3 || Guest.vipMember){
    console.log(`Yeayy, you're eliible for the free breakfast`);   
} else {
    console.log(`Sorry, you're not eligible yet for the free breakfast. Stays at least for 3 nights or VIP member  `);   
}