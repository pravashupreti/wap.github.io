// Q2.
"use strict";

function Student(firstName, lastName) {

    this.firstName = firstName
    this.lastName = lastName
    this.grades = []

    this.inputNewGrade = function(grade) {
        this.grades.push(grade)
    }
    this.computeAverageGrade = function() {
        return this.grades.reduce((acc, val) => acc + val) / this.grades.length
    }
}

let students = [];

let pravash = new Student("Pravash", "Upreti")

pravash.inputNewGrade(90)
pravash.inputNewGrade(85)
pravash.inputNewGrade(99)
pravash.inputNewGrade(95)

students.push(pravash)


let nirmal = new Student("Nirmal", "Silwal")


nirmal.inputNewGrade(95)
nirmal.inputNewGrade(88)
nirmal.inputNewGrade(96)
nirmal.inputNewGrade(78)

students.push(nirmal)


for (let index in students) {
    console.log(` Average score of ${students[index].firstName} ${students[index].lastName} is ${students[index].computeAverageGrade()}`)
}