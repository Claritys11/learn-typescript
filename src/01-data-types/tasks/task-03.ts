/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

//Option 1
type Student = {
    studentID: number[]
    fullName: string[]
    age: number[]
    activeStatus: boolean[]
}
let Student = {
    studentID: [1, 2, 3],
    fullName: ["Wiryateja Pamungkas", "Elang Dimas Syadewa", "Daffa Fakhrizzal Nauvan Esa Arzany"],
    age: [15,16,15],
    activeStatus: [true, true, true]
}
function giveoutput(): any{
for (let i = 0; i < Student.studentID.length; i++){
    console.log(`ID: ${Student.studentID[i]}`)
    console.log(`Full name: ${Student.fullName[i]}`)
    console.log(`Age: ${Student.age[i]}`)
    console.log(`Active Status: ${Student.activeStatus[i]}`)
    console.log()
}
}
console.log(giveoutput())

// Option 2
// let studentRecord1:[number, string, number, boolean] = [1, `Elang Dimas Syadewa`, 16, true]
// let studentRecord2:[number, string, number, boolean] = [2, `Wiryateja Pamungkas`, 15, true]
// let studentRecord3:[number, string, number, boolean] = [3, `Daffa Fakhrizzal Nauvan Esa Arzany`, 15, true]
// console.log(studentRecord1)
// console.log(studentRecord2)
// console.log(studentRecord3)
