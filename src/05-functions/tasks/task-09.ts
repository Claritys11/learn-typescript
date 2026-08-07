import { totalmem } from "node:os";

/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
type Patients ={
    id: string
    name: string
    age: number
    department: string
    admitted: boolean
    bill: number
}
const patients: Patients[] = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function TotalPatients(patient: Patients[]): number{
    let total = 0
    patient.forEach(element => {
        total++
    });
    return total
}
function TotalAdmitted(patient: Patients[]): number{
    let submitted=0
    patient.forEach(element => {
        if(element.admitted){
            submitted++
        }
    });
    return submitted
}
//gatau ini disuruh ngapain dah
function DischargedPatients(patient: Patients[]): number{
    let discharged=0
    patient.forEach(element => {
        if(!element.admitted){
            discharged++
        }
    });
    return discharged
}
function NumberPatientEDepart(patient: Patients[]){
    let pedia: number = 0
    let cardio: number = 0
    let ortho: number = 0

    patient.forEach(element => {
        if(element.department == `Cardiology`){
            cardio++
        } else if(element.department == `Orthopedics`){
            ortho++
        } else if (element.department == `Pediatrics`){
            pedia++
        }
    });
    return {cardio, pedia, ortho}
}

function HighestBill(patient: Patients[]): number{
    let highest = 0 
    patient.forEach(element => {
        if(highest<element.bill){
            highest = element.bill
        }
    });
    return highest
}
function LowestBill(patient: Patients[]): number{
    let lowest = patient[0].bill
    patient.forEach(element => {
        if(lowest>element.bill){
            lowest = element.bill
        }
    });
    return lowest
}

function AverageBill(patient: Patients[]): number{
    let averageS = 0 
    let jumlah =0
    patient.forEach(element => {
        averageS += element.bill
        jumlah++
    });
    let average = averageS / jumlah
    return average
}
// ini aku gak pasti juga ngerjainnya gimana
function Revenue(patient: Patients[]): number {
    let revenue = 0
    patient.forEach(element => {
        revenue += element.bill
    });
    return revenue
}
function AdmittedPatient(patient: Patients[]): string {
    let name: string[] = []
    patient.forEach(element => {
        if(element.admitted){
            name.push(element.name)
        }
    });
    return name.join(`, `)
}
function DisplayAll(input: any): void{
    console.log(
    
    TotalPatients(input)  ,  
    TotalAdmitted(input)    ,
    DischargedPatients(input),    
    NumberPatientEDepart(input),    
    HighestBill(input)    ,
    LowestBill(input)    ,
    AverageBill(input)    ,
    Revenue(input)    ,
    AdmittedPatient(input)   ); 
}
DisplayAll(patients)