import { PassThrough } from "node:stream";

/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
type Submissions = {
    student: string
    submitted: boolean
    score: number
}
const submissions:Submissions[] = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function TotalStudents(students: Submissions[]): number{
    let total = 0
    students.forEach(element => {
        total++
    });
    return total
}
function SubmittedAssignments(students: Submissions[]): number{
    let submitted=0
    students.forEach(element => {
        if(element.submitted){
            submitted++
        }
    });
    return submitted
}
function MissingAssignments(students: Submissions[]): number{
    let missing=0
    students.forEach(element => {
        if(!element.submitted){
            missing++
            element.score = 0
        }
    });
    return missing
}
function PassedStudents(students: Submissions[]): number{
    let passed = 0
    students.forEach(element => {
        if(element.score >= 75){
            passed++
        }
    });
    return passed
}
function Revision(students: Submissions[]): number{
    let revisi = 0
    students.forEach(element => {
        if(element.score <= 75 && element.submitted){
            revisi++
        }
    });
    return revisi

}
function AverageScore(students: Submissions[]): number{
    let averageS = 0 
    let jumlah =0
    students.forEach(element => {
        averageS += element.score
        jumlah++
    });
    let average = averageS / jumlah
    return average
}
function HighestScore(students: Submissions[]): number{
    let highest = 0 
    students.forEach(element => {
        if(highest<element.score){
            highest = element.score
        }
    });
    return highest
}
function LowestScore(students: Submissions[]): number{
    let lowest = students[0].score
    students.forEach(element => {
        if(lowest>element.score){
            lowest = element.score
        }
    });
    return lowest
}
function Display(input: any): void{
    console.log(TotalStudents(input));
    console.log(SubmittedAssignments(input));
    console.log(MissingAssignments(input));
    console.log(PassedStudents(input));
    console.log(Revision(input));
    console.log(AverageScore(input));
    console.log(HighestScore(input));
    console.log(LowestScore(input));
}
Display(submissions)