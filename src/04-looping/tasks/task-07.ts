/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */


const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let present: number= 0
let absent: number= 0

for(let i = 0; i < attendances.length; i++){
  let attendancesName = attendances[i]
  let attendancesPresent = attendances[i]
  if(attendancesPresent.present){
    present++
  } else {
    absent++
  }
  console.log(`Name: ${attendancesName.name}`);
  
}
console.log(`Present: ${present}`);
console.log(`Absent: ${absent}`);
let persen: number = present /attendances.length
console.log(`Attandance Percentage: ${persen * 100}%`);
