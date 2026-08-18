/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */
type Enrollments = {
    student: string
    course: string
    completed: boolean
    score: number
    duration: number
}
const enrollments: Enrollments[] = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];
//completion statistic
function TotalEnrollments(enrollments: Enrollments[]): any{
    let total = enrollments.length
    return total
}
function CompletedEnrollments(enrollments: Enrollments[]): any{
    let completed = 0
    enrollments.forEach(element => {
        if(element.completed){
            completed++
        }
    });
    return completed
}
function IncompleteEnrollments(enrollments: Enrollments[]): any{
    let incomplete = 0
    enrollments.forEach(element => {
        if(!element.completed){
            incomplete++
        }
    });
    return incomplete
}
function CompletionPercentage(enrollments: Enrollments[]) {
    let total = TotalEnrollments(enrollments)
    let completed = 0
    enrollments.forEach(element => {
        if(element.completed){
            completed++
        }
    });
    let persen = (completed / total) * 100
    return persen
}
//academic statistics
function HighestScore(enrollments:Enrollments[]) {
    let highest = 0
    enrollments.forEach(element => {
        if(highest<element.score){
            highest = element.score
        }
    });
    return highest
}
function LowestScore(enrollments:Enrollments[]) {
    let lowest = enrollments[0].score
    enrollments.forEach(element => {
        if(lowest<element.score){
            lowest = element.score
        }
    });
    return lowest
}
function AverageScore(enrollments:Enrollments[]) {
    let averageS = 0
    let jumlah = TotalEnrollments(enrollments)
    enrollments.forEach(element => {
        averageS += element.score
    });
    let average = averageS / jumlah
    return average
}
function PassingScores(enrollments:Enrollments[]) {
    let students = 0
    enrollments.forEach(element => {
        if(element.score >= 75){
            students++
        } 
    });
    return students
}
// course statistics
function EnrolledEachC(enrollments:Enrollments[]) {
    let typescript = 0
    let database = 0
    let backend = 0
    let unknown = 0
    enrollments.forEach(element => {
        if(element.course == "TypeScript"){
            typescript++
        } else if (element.course == "Database"){
            database++
        } else if (element.course == "Backend"){
            backend++
        } else{
            unknown++
        }
    });
    return {typescript, database, backend, unknown}
}
function ScoreEachC(enrollments:Enrollments[]) {
    let counts = EnrolledEachC(enrollments)
    let typescripttotal = 0
    let databasetotal = 0
    let backendtotal = 0
    enrollments.forEach(element => {
        if(element.course == "TypeScript"){
            typescripttotal += element.score
        } else if (element.course == "Database"){
            databasetotal += element.score
        } else if (element.course == "Backend"){
            backendtotal += element.score
        } 
    });
    let avgtype = counts.typescript ? (typescripttotal/ counts.typescript) : 0
    let avgdata = counts.database ? (databasetotal / counts.database) : 0
    let avgbackend = counts.backend ? (backendtotal / counts.backend) : 0
    return {avgtype, avgdata, avgbackend}
}

// learning statistics
function TotalLearnHours(enrollments:Enrollments[]) {
    let total = 0
    enrollments.forEach(element => {
        total += element.duration
    });
    return total
}
function AverageLearn(enrollments:Enrollments[]) {
    let avgJ = 0
    let value = TotalLearnHours(enrollments)
    enrollments.forEach(element => {
        value += element.duration
        avgJ++
    });
    let average: number = value / avgJ
    return average
}


//void function 
function GiveOutput(enrollementss:Enrollments[]): void {
    console.log(`Total enrollments: ${TotalEnrollments(enrollementss)}`);
    console.log(`Completed enrollments: ${CompletedEnrollments(enrollementss)}`);
    console.log(`Incomplete enrollments: ${IncompleteEnrollments(enrollementss)}`);
    console.log(`Completion Percentage: ${CompletionPercentage(enrollementss)}%`);
    console.log(`-------`);
    console.log(`Highest Score: ${HighestScore(enrollementss)}`);
    console.log(`Lowest Score: ${LowestScore(enrollementss)}`);
    console.log(`Average Score: ${AverageScore(enrollementss)}`);
    console.log(`Passing Scores: ${PassingScores(enrollementss)}`);
    console.log(`-------`);
    console.log(`Enrolled Each Course: ${JSON.stringify(EnrolledEachC(enrollementss))}`);
    console.log(`Score Each Course: ${JSON.stringify(ScoreEachC(enrollementss))}`);
    console.log(`-------`);
    console.log(`Total Learn Hours: ${TotalLearnHours(enrollementss)}`);
    console.log(`Average Learn Hours: ${AverageLearn(enrollementss)}`);
}
GiveOutput(enrollments)