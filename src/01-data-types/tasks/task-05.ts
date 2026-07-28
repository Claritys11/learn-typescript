/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */
// i know sebenarnya ini type kinda useless, but i kinda want to use this method :cry:
type AttandanceRecord = {
    employeeID: number
    employeeName: string
    date: string
    checkInTime: number
    checkoutTime: number
    totalWorkHours: number
    present: boolean
}

let AttandanceRecord: AttandanceRecord[] = [
    {
        employeeID: 1,
        employeeName: `Rusdi`,
        date: `13-5-2026`,
        checkInTime: 7.00,
        checkoutTime: 18.00,
        totalWorkHours: 11,
        present: true,
    },
    {
        employeeID: 2,
        employeeName: `Ruscy`,
        date: `13-5-2026`,
        checkInTime: 7.15,
        checkoutTime: 18.30,
        totalWorkHours: 11.15,
        present: true
    },
    {
        employeeID: 3,
        employeeName: `Rasdi`,
        date: `13-5-2026`,
        checkInTime: 7.30,
        checkoutTime: 18.35,
        totalWorkHours: 11.05,
        present: true
    }
]
console.log(AttandanceRecord)