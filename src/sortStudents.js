'use strict';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var SortField;
(function (SortField) {
    SortField["Name"] = "name";
    SortField["Surname"] = "surname";
    SortField["Age"] = "age";
    SortField["Married"] = "married";
    SortField["Grades"] = "grades";
})(SortField || (SortField = {}));
var students = [
    {
        name: 'Diana',
        surname: 'Dorsey',
        age: 24,
        married: false,
        grades: [3, 3, 4, 5, 4, 3, 5, 5]
    },
    {
        name: 'Christina',
        surname: 'Branscome',
        age: 23,
        married: true,
        grades: [4, 4, 4, 5, 5, 5, 5, 5]
    },
    {
        name: 'Willie',
        surname: 'Barrera',
        age: 22,
        married: false,
        grades: [3, 5, 5, 3, 3, 5, 4, 4]
    },
    {
        name: 'Douglas',
        surname: 'Paez',
        age: 23,
        married: true,
        grades: [5, 5, 5, 4, 5, 5, 5, 5]
    },
    {
        name: 'Richard',
        surname: 'Hall',
        age: 23,
        married: false,
        grades: [3, 2, 4, 5, 4, 3, 3, 3]
    },
    {
        name: 'Dale',
        surname: 'Gandy',
        age: 23,
        married: false,
        grades: [5, 3, 3, 3, 3, 5, 4, 3, 4]
    },
    {
        name: 'Lillian',
        surname: 'Quinn',
        age: 23,
        married: false,
        grades: [3, 4, 3, 4, 4, 4, 5, 2, 3]
    },
    {
        name: 'Jessica',
        surname: 'Buxton',
        age: 26,
        married: true,
        grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4]
    },
    {
        name: 'Jessica',
        surname: 'Buxton',
        age: 26,
        married: true,
        grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4]
    },
    {
        name: 'Pamela',
        surname: 'Casillas',
        age: 24,
        married: false,
        grades: [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2]
    },
    {
        name: 'Glenn',
        surname: 'Thompson',
        age: 22,
        married: false,
        grades: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2]
    }
];
function sortStudents(students, sortBy, order) {
    var editedStudents = students.map(function (student) {
        var sumGrades = student.grades.reduce(function (sum, x) { return sum + x; }, 0);
        return __assign(__assign({}, student), { grades: sumGrades });
    });
    switch (true) {
        case (sortBy === SortField.Age):
            editedStudents.sort(function (studentA, studentB) { return studentA.age - studentB.age; });
            break;
        case (sortBy === SortField.Grades):
            editedStudents
                .sort(function (studentA, studentB) { return studentA.grades - studentB.grades; });
            break;
        case (sortBy === SortField.Name || sortBy === SortField.Surname):
            editedStudents
                .sort(function (studentA, studentB) { return (studentA[sortBy].localeCompare(studentB[sortBy])); });
            break;
        case (sortBy === SortField.Married):
            editedStudents.sort(function (studentA, studentB) { return (+studentA.married - +studentB.married); });
            break;
        default:
            break;
    }
    if (order === 'descending') {
        return editedStudents.reverse();
    }
    return editedStudents;
}
;
