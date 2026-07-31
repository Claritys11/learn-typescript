/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

type Product = {
    name: string
    price: number
    quantity: number
}
type Customer = {
    product: Product[]
    premiumMembers: boolean
    voucher: number
    rewardPointRate: number
}
let Customer: Customer = {
    product: [{
        name: `Mechanical Keyboard`,
        price: 850000,
        quantity: 1
    },
    {
        name: `Wireless Mouse`,
        price: 275000,
        quantity: 2
    },
    {
        name: `Mouse Pad`,
        price: 420000,
        quantity: 1
    }],
    premiumMembers: true,
    voucher: 100000,
    rewardPointRate: 0
}
//Subtootal
let subtotalKeyboard = Customer.product[0].price * Customer.product[0].quantity
let subtotalMouse = Customer.product[1].price * Customer.product[1].quantity
let subtotalPad = Customer.product[2].price * Customer.product[2].quantity

console.log(`With subtotal Keyboard: ${subtotalKeyboard}`)
console.log(`With subtotal Mouse: ${subtotalMouse}`)
console.log(`With subtotal Pad: ${subtotalPad}`)
console.log()
//discount
let totalBeforeDiscount = subtotalKeyboard + subtotalMouse + subtotalPad
console.log(`This is your payment before anything else: ${totalBeforeDiscount}`);

let discountPremium = 0
if(Customer.premiumMembers){
    discountPremium = totalBeforeDiscount * 0.10
    console.log(`Because you're premium member, your payment discounted to ${discountPremium}`);

} else {
    discountPremium = totalBeforeDiscount
}

let voucherDeduction = discountPremium - Customer.voucher
console.log(`Your pay after voucher deduction: ${voucherDeduction}`);

let VATcount = voucherDeduction * 0.11
let VAT = voucherDeduction - VATcount
console.log(`You have to pay (AFTER VAT): ${VAT}`);

let pointRate = Math.floor(VAT/50000)
if(VAT > 50000){
    for (let i = 0; i < Math.floor(VAT/50000); i++){
        Customer.rewardPointRate++
    }
}
console.log(`You have ${Customer.rewardPointRate} Reward Points!`);

if(Customer.premiumMembers == true || VAT > 1500000){
    console.log(`You're eligible for free shipping`);
} else{
    console.log(`You're not eligible for free shipping`);
}