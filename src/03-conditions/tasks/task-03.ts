/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */

type Ruler = {
    lessThan50GB: string
    GB50150: string
    MoreThan150GB: string
}
type Information = {
    name: string
    monthlyUsageGB: number
}
let Business: Ruler = {
    lessThan50GB: `Basic`,
    GB50150: `Standard`,
    MoreThan150GB: `Premium`
}
let Customer: Information = {
    name: `Raka Saputra`,
    monthlyUsageGB: 124
}
if(Customer.monthlyUsageGB > 150){
    console.log(`We recommend you using the ${Business.MoreThan150GB}`);
} else if (Customer.monthlyUsageGB >= 50 && Customer.monthlyUsageGB <= 150){
    console.log(`We recommend you using the ${Business.GB50150}`);
} else {
    console.log(`We recommend you using the ${Business.lessThan50GB}`);
}