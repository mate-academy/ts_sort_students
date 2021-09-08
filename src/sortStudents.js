"use strict";
// describe Student type
// create and export SortType enum
// create SortOrder type
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.sortStudents = exports.SortType = void 0;
var SortType;
(function (SortType) {
    SortType[SortType["Name"] = 0] = "Name";
    SortType[SortType["Surname"] = 1] = "Surname";
    SortType[SortType["Age"] = 2] = "Age";
    SortType[SortType["Married"] = 3] = "Married";
    SortType[SortType["AverageGrade"] = 4] = "AverageGrade";
})(SortType = exports.SortType || (exports.SortType = {}));
var countAverage = function (array) {
    var sum = array.reduce(function (acc, value) { return acc + value; }, 0);
    return sum / array.length;
};
function sortStudents(students, sortBy, order) {
    var sortedStudents = __spreadArray([], students, true);
    switch (sortBy) {
        case SortType.Name:
            sortedStudents.sort(function (firstStudent, secondStudent) {
                return (order === 'asc')
                    ? firstStudent.name.localeCompare(secondStudent.name)
                    : secondStudent.name.localeCompare(firstStudent.name);
            });
            break;
        case SortType.Surname:
            sortedStudents.sort(function (firstStudent, secondStudent) {
                return (order === 'asc')
                    ? firstStudent.surname.localeCompare(secondStudent.surname)
                    : secondStudent.surname.localeCompare(firstStudent.surname);
            });
            break;
        case SortType.Age:
            sortedStudents.sort(function (firstStudent, secondStudent) {
                return (order === 'asc')
                    ? firstStudent.age - secondStudent.age
                    : secondStudent.age - firstStudent.age;
            });
            break;
        case SortType.Married:
            sortedStudents.sort(function (firstStudent, secondStudent) {
                return (order === 'asc')
                    ? (firstStudent.married ? 1 : 0) - (secondStudent.married ? 1 : 0)
                    : (secondStudent.married ? 1 : 0) - (firstStudent.married ? 1 : 0);
            });
            break;
        case SortType.AverageGrade:
            sortedStudents.sort(function (firstStudent, secondStudent) {
                var firstStudentAverageGrades = countAverage(firstStudent.grades);
                var secondStudentAverageGrades = countAverage(secondStudent.grades);
                return (order === 'asc')
                    ? firstStudentAverageGrades - secondStudentAverageGrades
                    : secondStudentAverageGrades - firstStudentAverageGrades;
            });
            break;
        default:
            return sortedStudents;
    }
    return sortedStudents;
}
exports.sortStudents = sortStudents;
