/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.
- Display the final registration result.
 */

import { toUnicode } from "node:punycode";

type Information = {
    name: string
    activeStudent: boolean
    tuitionPaid: boolean
    passedProgrammingFundamentals: boolean
    passedDatabaseSystems: boolean
    GPA: number
    seatsAvaliable: boolean
}
let Student: Information = {
    name: `Nadia Putri`,
    activeStudent: true,
    tuitionPaid: true,
    passedProgrammingFundamentals: true,
    passedDatabaseSystems: true,
    GPA: 3.45,
    seatsAvaliable: false

}

if(Student.activeStudent && Student.tuitionPaid){
    if(Student.passedProgrammingFundamentals && Student.passedDatabaseSystems && Student.GPA >= 3.20){
        if(Student.seatsAvaliable){
            console.log(`Registration Successful!!`);
            
        } else {
            console.log(`Added to Waiting List`);
            
        }
    } else {
        console.log(`Academic Requirements Not Met`);
        
    }
} else {
    console.log(`Rejected`);
    
}