/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */
type Information = {
    name: string
    basicSalary: number
    overtimeHours: number
    overtimeRate: number
}
let Employee: Information = {
    name: `Dimas`,
    basicSalary: 5000000,
    overtimeHours: 12,
    overtimeRate: 50000
}
let overtimePay = Employee.overtimeHours * Employee.overtimeRate
let Bonus = 0
if(Employee.overtimeHours > 10){
    Bonus += 300000
}
let finalSalary = Employee.basicSalary + Bonus + overtimePay
console.log(`Basic Salary: ${Employee.basicSalary}`)
console.log(`Overtime pay: ${overtimePay}`)
console.log(`Bonus: ${Bonus}`)
console.log(`Your final Salary: ${finalSalary}`)