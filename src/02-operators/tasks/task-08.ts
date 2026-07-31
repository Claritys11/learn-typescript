/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

type Information = {
    previousMeter: number
    currentMeter: number
    electricityPriceperKWH: number
    solarPanelInstalled: boolean
    energySavingMode: boolean
}
let Today: Information = {
    previousMeter: 25640,
    currentMeter: 25892,
    electricityPriceperKWH: 1650,
    solarPanelInstalled: true,
    energySavingMode: false
}

let electricityUsage: number = Today.currentMeter - Today.previousMeter
let priceBeforeDiscount: number = electricityUsage * Today.electricityPriceperKWH
let priceAfterDiscount: number = 0
let priceAfterDiscountt: number = 0
if(Today.solarPanelInstalled){
    priceAfterDiscountt = priceBeforeDiscount * 0.20
    priceAfterDiscount = priceBeforeDiscount - priceAfterDiscountt
} else{
    priceAfterDiscount = priceBeforeDiscount
}

let priceAfterDiscountSaving: number = 0
let priceAfterDiscountSavingg: number = 0
if(Today.energySavingMode){
    priceAfterDiscountSavingg = priceAfterDiscount * 0.05
    priceAfterDiscountSaving = priceAfterDiscount - priceAfterDiscountSavingg
} else {
    priceAfterDiscountSaving = priceAfterDiscount
}

if(Today.solarPanelInstalled ==true  && electricityUsage < 300 && Today.energySavingMode == true){
    console.log(`You're eligible for the Green Energy Program eligiblity!`);
} else {
    console.log(`You're not eligible for the Green Energy Program..`);   
}
console.log(`Your total energy consumption: ${electricityUsage}`);
console.log(`Your electricity bill (Before discount): ${priceBeforeDiscount}`);
console.log(`Your final bill (After discount): ${priceAfterDiscountSaving}`);
