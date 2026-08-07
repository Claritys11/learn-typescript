/**
 * The HR department wants to display bonus notifications for employees.
 * Business Rules
 *  - Performance score ≥ 85 → Bonus Approved
 *  - Otherwise → Bonus Not Approved
 * Employee data:
 * | Employee       | Score |
 * | ---------------| ----- |
 * | John Cena      |    92 |
 * | Undertaker     |    76 |
 * | Rey Mysterio   |    88 |
 * 
 * Instead of repeating the decision logic, the HR department wants a reusable function.
 * The function should display the notification directly and does not return any value.
 * 
 * Student Tasks:
 * 1. Create a function named showBonusStatus.
 * 2. The function receives:
 *  - employee name
 *  - performance score
 * 3. Display the bonus result inside the function.
 * 4. Call the function for every employee.
 */

type Data = {
    employee: string[]
    score: number[]
}
let Employee: Data = {
    employee: [`John Cena`, `Undertaker`, `Rey Mysterio`],
    score: [92, 76, 88]
}

function showBonusStatus(score: number){
    if(score >= 85){
        console.log(`Bonus Approved`);
    } else {
        console.log(`Bonus Not Approved`);
        
    }
    
}

for(let i = 0; i < Employee.employee.length; i++){
    console.log(`Name: ${Employee.employee[i]}`);
    showBonusStatus(Employee.score[i])
    console.log();
    
    
}