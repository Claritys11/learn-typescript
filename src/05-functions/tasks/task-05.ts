/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

function findHighestScore(scores: number[]): number {
    let highest = 0
    for(const score of scores){
        if(score > highest){
            highest = score
        }
    }
    return highest
}

function findLowestScore(scores: number[]): number {
    let lowest = scores[0]
    for(const score of scores){
        if(lowest > score){
            lowest = score
        }
    }
    return lowest
}

function calculateAverage(scores: number[]): number {
    let averageS: number = 0
    for(const score of scores){
        averageS += score
    }
    let average: number = averageS / scores.length
    return average
}

function countPassedStudents(scores: number[]): number {
    let count: number = 0
    for(const score of scores){
        if(score >= 75){
            count++
        }
    }
    return count
}