/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */
type Product = {
    productCode: number
    productName: string
    sellingPrice: number
    stockQuantity: number
    productWeight: number
    averageCustomerRating: number
    discounted: boolean
}
let Product: Product[] = [
    {
        productCode: 1,
        productName: `Mouse`,
        sellingPrice: 123000,
        stockQuantity: 30,
        productWeight: 1,
        averageCustomerRating: 10,
        discounted: true
    },
    {
        productCode: 2,
        productName: `Keyboard`,
        sellingPrice: 150000,
        stockQuantity: 35,
        productWeight: 1,
        averageCustomerRating: 10,
        discounted: true        
    },
    {
        productCode: 3,
        productName: `Monitor`,
        sellingPrice: 400000,
        stockQuantity: 40,
        productWeight: 3,
        averageCustomerRating: 10,
        discounted: false
    }
]
console.log(Product)