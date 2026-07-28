/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */
type Student = {
    studentID: number
    fullName: string
    gradelevel: number

}
type Course = {
    courseID: number
    courseTitle: string
    instructorName: string
}
type Registration = {
    registrationDate: string
    paymentcomplete: boolean
}

let Student: Student[] = [
    {
        studentID: 1,
        fullName: `Eko Saputra`,
        gradelevel: 2
    },
    {
        studentID: 2,
        fullName: `Mamad Fakhrizzal`,
        gradelevel: 3
    },
    {
        studentID: 3,
        fullName: `Setiawan Putra`,
        gradelevel: 1
    }
]

let Course: Course[] = [
    {
        courseID: 1,
        courseTitle: `Math`,
        instructorName: `Rendius abi`
    },
    {
        courseID: 2,
        courseTitle: `IPAS`,
        instructorName:`Reza setiawan`
    },
    {
        courseID: 3,
        courseTitle: `KKA`,
        instructorName: `Lyra Herdian`
    }
]

let Registration: Registration[] = [
    {
        registrationDate: `10-12-2020`,
        paymentcomplete: true
    },
    {
        registrationDate: `11-12-2021`,
        paymentcomplete: true
    },
    {
        registrationDate: `12-12-2022`,
        paymentcomplete: false
    }
]
console.log(Student)
console.log(Course)
console.log(Registration)
