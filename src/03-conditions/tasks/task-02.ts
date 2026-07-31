/**
 * A company evaluates employees every month.
 * If an employee's performance score is 80 or above, they receive a performance bonus.
 * Otherwise, they do not receive a bonus.
 * Employee information:
 * | Information       | Value         |
 * | ----------------- | ------------- |
 * | Employee Name     | Dimas Pratama |
 * | Performance Score | 78            |
 * 
 * Tasks:
 * 1. Declare the variables.
 * 2. Use an if...else statement.
 * 3. Display the evaluation result. If eligible will display "Bonus Approved", 
 * otherwise display "Bonus not approved"
 */
type Information = {
    name: string
    perfomanceScore: number
}
let Employee: Information = {
    name: `Dimas Pratama`,
    perfomanceScore: 78
}
if (Employee.perfomanceScore >= 80){
    console.log(`Bonus Approved`);
} else {
    console.log(`Bonus not approved`);
    
}