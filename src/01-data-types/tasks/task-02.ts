/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

// const product: string = `Mechanical Keyboard RGB`
// const productID: string = `KBR-001`
// let priceproduct: number = 850000
// const discount: number = 0.25
// let stock: number = 18
type Product = {
    product: string
    productID: string
    priceproduct: number
    discount: number
    stock: number
}
type Customer = {
    premium: boolean
    order: number
}
let Customer = {
    premium: true,
    order: 2
}

let Product = {
    product:`Mechanical Keyboard RGB`,
    productID: `KBR-001`,
    priceproduct: 850000,
    discount: 0.25,
    stock: 18
}
// function buy(beliberapa: number, hargaproduk: number){
//     return beliberapa * hargaproduk productKeyboard.discount
// }
function buy(): number{
    return Customer.order * Product.priceproduct / Product.discount
}
function stockrn(): number {
    return Product.stock - Customer.order
}
let ngitungbiayacustomer=buy()
let stockafter=stockrn()
console.log(`Total biaya kamu ${ngitungbiayacustomer}.`)
console.log(` Dengan Penjelasan:`)
console.log(`Harga produk: ${Product.priceproduct}`)
console.log(`Stock sebelum: ${Product.stock} Stock sesudah: ${stockafter}`);
if (Customer.premium == true){
    console.log(`Kamu premium, kamu eligible for free shipping~`);
} else {
    console.log(`Kamu belum premium, kamu belum eligible for free shipping..`);
}