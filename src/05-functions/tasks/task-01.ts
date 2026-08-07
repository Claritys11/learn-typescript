/**
 * A teacher wants to calculate students' final grades automatically. Instead of writing the same formula multiple times, the teacher asks the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */

type Info = {
    name: string []
    assignment: number[]
    midterm: number[]
    final: number[]
}
let Scores: Info ={
    name: ["Alya", "Budi", "Citra"],
    assignment: [85, 78, 90],
    midterm: [80, 75, 88],
    final: [92, 81, 95]
}
function calculateFinalGrade(a: number, b: number, c: number): number {
    return (a * 0.30) + (b * 0.30) + (c * 0.40)
}
for(let i = 0; i < Scores.name.length; i++){
    console.log(`Name: ${Scores.name[i]}`);
    console.log(`Final Scores: ${calculateFinalGrade(Scores.assignment[i], Scores.midterm[i], Scores.final[i])}`);
    console.log();
}