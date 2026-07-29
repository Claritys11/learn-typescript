/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

type Conditions = {
    finalScore: number
    attendance: number
    tuitionPaid: boolean
}
let Student: Conditions = {
    finalScore: 82,
    attendance: 94,
    tuitionPaid: true
} 
function isEligible(): any {
    if(Student.finalScore >= 75 && Student.attendance >= 90 && Student.tuitionPaid == true){
        return console.log(`Eligible`)
    } else {
        return console.log(`Not Eligible`)
    }
}
console.log(isEligible())