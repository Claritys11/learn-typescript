/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */
type Students = {
  name: string
  major: string
  active: boolean
}
const students: Students[] = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students: Students[]): void{
  let active: number = 0
  for(const student of students){
    active++
  } return console.log(`Active: ${active}`);
  
}

function countInactiveStudents(students: Students[]): any{
  let inactive: number = 0
  // for(const student of students){
  //   if(student.)
  // }
  students.forEach(element => {
    if(!element.active){
      inactive++    
    }
  });
  return console.log(`Inactive: ${inactive}`);
  
}

function countStudentsByMajor(students: Students[]){
  let net: number = 0
  let soft: number =0
  let multi: number =0
  students.forEach(element => {
    if(element.major == "Networking"){
      net++
    } else if (element.major == "Software Engineering"){
      soft++
    } else if(element.major == "Multimedia"){
      multi++
    }
  });
  return console.log(`Networking: ${net}, Multimedia: ${multi}, Software Engineering: ${soft}`);
  
}

function printEnrollmentReport(){
  countActiveStudents(students)
  countInactiveStudents(students)
  countStudentsByMajor(students)

}
printEnrollmentReport()