/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];
let A: number = 0
let B: number = 0
let C: number = 0
let D: number = 0
let highestScore: number =0
let lowestScore: number =students[0].score
let totalScore: number = 0
for(let i = 0; i < students.length; i++){
    totalScore += students[i].score
    if (students[i].score >= 90){
        A++
    } else if(students[i].score > 80 && students[i].score < 90){
        B++
    } else if(students[i].score > 70 && students[i].score < 80){
        C++
    } else{
        D++
    }
    if(highestScore < students[i].score){
        highestScore = students[i].score
    }
    if(lowestScore > students[i].score){
        lowestScore = students[i].score
    }
}
let averageScore: number = totalScore / students.length
console.log(`Total A: ${A}`);
console.log(`Total B: ${B}`);
console.log(`Total C: ${C}`);
console.log(`Total D: ${D}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore}`);
