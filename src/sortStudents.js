"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortType = void 0;
exports.sortStudents = sortStudents;
var SortType;
(function (SortType) {
    SortType[SortType["Name"] = 0] = "Name";
    SortType[SortType["Surname"] = 1] = "Surname";
    SortType[SortType["Age"] = 2] = "Age";
    SortType[SortType["Married"] = 3] = "Married";
    SortType[SortType["AverageGrade"] = 4] = "AverageGrade";
})(SortType || (exports.SortType = SortType = {}));
function sortStudents(students, sortBy, order) {
    var sortedStudents;
    if (order === 'asc') {
        switch (sortBy) {
            case SortType.Name:
                sortedStudents = students
                    .slice()
                    .sort(function (a, b) { return a.name.localeCompare(b.name); });
                return sortedStudents;
            case SortType.Surname:
                sortedStudents = students
                    .slice()
                    .sort(function (a, b) { return a.surname.localeCompare(b.surname); });
                return sortedStudents;
            case SortType.Age:
                sortedStudents = students
                    .slice()
                    .sort(function (a, b) { return a.age - b.age; });
                return sortedStudents;
            case SortType.Married:
                sortedStudents = students
                    .slice()
                    .sort(function (a, b) { return Number(a.married) - Number(b.married); });
                return sortedStudents;
            case SortType.AverageGrade:
                sortedStudents = students
                    .slice()
                    .sort(function (a, b) {
                    var aAverageGrade = a.grades.reduce(function (c, d) { return c + d; }) / a.grades.length;
                    var bAverageGrade = b.grades.reduce(function (c, d) { return c + d; }) / b.grades.length;
                    return aAverageGrade - bAverageGrade;
                });
                return sortedStudents;
            default:
        }
    }
    if (order === 'desc') {
        switch (sortBy) {
            case SortType.Name:
                sortedStudents = students
                    .slice()
                    .sort(function (a, b) { return b.name.localeCompare(a.name); });
                return sortedStudents;
            case SortType.Surname:
                sortedStudents = students
                    .slice()
                    .sort(function (a, b) { return b.surname.localeCompare(a.surname); });
                return sortedStudents;
            case SortType.Age:
                sortedStudents = students
                    .slice()
                    .sort(function (a, b) { return b.age - a.age; });
                return sortedStudents;
            case SortType.Married:
                sortedStudents = students
                    .slice()
                    .sort(function (a, b) { return Number(b.married) - Number(a.married); });
                return sortedStudents;
            case SortType.AverageGrade:
                sortedStudents = students
                    .slice()
                    .sort(function (a, b) {
                    var aAverageGrade = a.grades.reduce(function (c, d) { return c + d; }) / a.grades.length;
                    var bAverageGrade = b.grades.reduce(function (c, d) { return c + d; }) / b.grades.length;
                    return bAverageGrade - aAverageGrade;
                });
                return sortedStudents;
            default:
        }
    }
    return students;
}
