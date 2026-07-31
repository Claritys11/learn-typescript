/**
 * A hospital emergency department must determine the priority level of every arriving patient.
 * The hospital follows these rules:
 * 1. If the patient's condition is critical, they are immediately assigned to the Emergency Room.
 * 2. Otherwise, if the patient has an appointment:
 *  - Elderly patients (age ≥ 60) receive Priority Queue.
 *  - Other patients receive Regular Queue.
 * 3. Otherwise:
 *  - Patients with health insurance are assigned to the Insurance Registration Counter.
 *  - Patients without insurance are assigned to the General Registration Counter.
 * 
 * Today's patient information:
 * | Information        | Value      |
 * | ------------------ | ---------- |
 * | Patient Name       | Siti Rahma |
 * | Critical Condition | No         |
 * | Has Appointment    | Yes        |
 * | Age                | 67         |
 * | Has Insurance      | Yes        |
 * 
 * Tasks: 
 * 1. Declare all required variables.
 * 2. Implement the hospital workflow using conditional statements.
 * 3. Display the patient's destination.
 */
type Information = {
    name: string
    criticalCondition: boolean
    hasAppointment: boolean
    age: number
    hasInsurance: boolean
}
let Patient: Information = {
    name: `Siti Rahma`,
    criticalCondition: false,
    hasAppointment: true, 
    age: 67,
    hasInsurance: true
}
//idk ini ini kurang jelas arahannya...
// if(Patient.criticalCondition){
//     console.log(`You're critical, you assigned to the emergency room.`);   
// } else if(Patient.age >= 60){
//     console.log(`You receive the priority queue`);
// } else if (Patient.age < 60){
//     console.log(`You receive the regular queue`);   
// } else if (Patient.hasInsurance){
//     console.log(`You're assigned to the Insurance Registration Counter`);    
// } else {
//     console.log(`You're assigned to the General Registration Counter`);
// }

if(Patient.criticalCondition){
    console.log(`You're critical, you assigned to the emergency room.`);   
} 
if(Patient.age >= 60){
    console.log(`You receive the priority queue`);
} else if (Patient.age < 60){
    console.log(`You receive the regular queue`);   
}
if (Patient.hasInsurance){
    console.log(`You're assigned to the Insurance Registration Counter`);    
} else {
    console.log(`You're assigned to the General Registration Counter`);
}