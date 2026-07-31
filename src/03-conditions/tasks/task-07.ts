/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */
type Information = {
    applicant: string
    monthlyIncome: number
    creditScore: number
    existingDebt: number
    permanentEmployee: boolean
}
let Applicant: Information = {
    applicant: `Andi Wijaya`,
    monthlyIncome: 10000000,
    creditScore: 725,
    existingDebt: 2500000,
    permanentEmployee: true
}

let firstscreening: boolean = Applicant.monthlyIncome >= 8000000 && Applicant.creditScore >=70 ? true : false
let validate: number = Applicant.monthlyIncome / 0.30
let secondscreening: boolean = validate > Applicant.existingDebt && Applicant.permanentEmployee ? true:false
if (firstscreening){
    if(secondscreening){
        console.log(`Loan Approved`);
    } else {
        console.log(`Manual Review`);
    }
} else {
    console.log(`Loan Rejected`);
    
}