/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */
type Product = {
    name: string
    price: number
    quantity: number
}
type Customer = {
    product: Product[]
    premiumMembers: boolean
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
        price: 120000,
        quantity: 1
    }],
    premiumMembers: true
}
//Subtootal
let subtotalKeyboard = Customer.product[0].price * Customer.product[0].quantity
let subtotalMouse = Customer.product[1].price * Customer.product[1].quantity
let subtotalPad = Customer.product[2].price * Customer.product[2].quantity
//quantity total
let totalItems = 0
for(let i = 0; i < Customer.product.length; i++){
    for(let j = 0; j < Customer.product[i].quantity; j++)
        totalItems++
}
// let jumlahBarang: number = 0
// for(let i = 0; i < Customer.product.length; i++){
//     jumlahBarang += Customer.product[i].quantity

// }
// console.log(jumlahBarang)



console.log(`With your total items: ${totalItems}`)
console.log(`With subtotal Keyboard: ${subtotalKeyboard}`)
console.log(`With subtotal Mouse: ${subtotalMouse}`)
console.log(`With subtotal Pad: ${subtotalPad}`)
console.log()
//discount
let totalBeforeDiscount = subtotalKeyboard + subtotalMouse + subtotalPad
//challenge
console.log(`Total sebelum diskon ${totalBeforeDiscount}`)

if (totalBeforeDiscount >= 1000000){
    let totalAfterDiscount = totalBeforeDiscount * 0.10
    console.log(`Here's your total after discountt! ${totalAfterDiscount}`)
} else console.log(`Here's your total without discount! ${totalBeforeDiscount}`)