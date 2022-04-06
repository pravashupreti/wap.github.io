// Q1.
"use strict";
let Student = {
    firstName: 'firstName',
    lastName: 'lastName',

    inputNewGrade: function(grade) {
        this.grades.push(grade)
    },
    computeAverageGrade: function() {
        return this.grades.reduce((acc, val) => acc + val) / this.grades.length
    }

}

let students = [];

let pravash = Object.create(Student)
pravash.firstName = "Pravash"
pravash.lastName = "Upreti"
pravash.grades = []

pravash.inputNewGrade(90)
pravash.inputNewGrade(85)
pravash.inputNewGrade(99)
pravash.inputNewGrade(95)

students.push(pravash)

let nirmal = Object.create(Student)
nirmal.firstName = "Nirmal"
nirmal.lastName = "Silwal"
nirmal.grades = []

nirmal.inputNewGrade(95)
nirmal.inputNewGrade(88)
nirmal.inputNewGrade(96)
nirmal.inputNewGrade(78)

students.push(nirmal)


for (let index in students) {
    console.log(` Average score of ${students[index].firstName} ${students[index].lastName} is ${students[index].computeAverageGrade()}`)
}