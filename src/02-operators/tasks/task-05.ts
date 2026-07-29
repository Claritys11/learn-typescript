import { compileFunction } from "node:vm";

/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */
type Information = {
    name: string
    GPA: number
    familyIncome: number
    competitionCount: number
    hasDisciplinaryRecord: boolean
    documentsComplete: boolean
}
let Student: Information = {
    name: `Alya Putri`,
    GPA: 3.89,
    familyIncome: 4200000,
    competitionCount: 4,
    hasDisciplinaryRecord: false,
    documentsComplete: true
}
let budgetScholarship: number = 500000000
// let scholarshipAmount: number = Student.GPA >= 3.75 && Student.familyIncome < 5000000 && Student.competitionCount >= 3 && Student.hasDisciplinaryRecord == false && Student.documentsComplete == true ? 12000000 : 0
let accepted: boolean = false
if(Student.GPA >= 3.75 && Student.familyIncome < 5000000 && Student.competitionCount >= 3 && Student.hasDisciplinaryRecord == false && Student.documentsComplete == true){
    // let scholarshipAmount = 12000000
    accepted = true
    // console.log(`Youre accepted for the Scholarship!`)
} else {
    // let scholarshipAmount = 0
    accepted=  false
    // console.log(`Sorry, you aren't accepted for the Scholarship, try again next time!`)
}

let scholarshipAmount = accepted ? 12000000 : 0
console.log(accepted ? `Youre accepted for the Scholarship!`:`Sorry, you aren't accepted for the Scholarship, try again next time!`);

let remainingBudget = budgetScholarship - scholarshipAmount
console.log(`Total Budget: ${budgetScholarship}`)
console.log(`Remaining budget: ${remainingBudget}`)