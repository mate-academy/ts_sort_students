"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.sortStudents = exports.SortType = void 0;
var SortType;
(function (SortType) {
    SortType["Name"] = "name";
    SortType["Surname"] = "surname";
    SortType["Age"] = "age";
    SortType["Married"] = "married";
    SortType["AverageGrade"] = "grades";
})(SortType = exports.SortType || (exports.SortType = {}));
function calculateAverageGrade(grades) {
    return grades.reduce(function (sum, grade) { return sum + grade; }, 0) / grades.length;
}
function sortStudents(students, sortBy, order) {
    return __spreadArray([], students).sort(function (studentA, studentB) {
        switch (sortBy) {
            case SortType.Name:
            case SortType.Surname:
                return order === 'asc'
                    ? studentA[sortBy].localeCompare(studentB[sortBy])
                    : studentA[sortBy].localeCompare(studentB[sortBy]);
            case SortType.AverageGrade: {
                var avgGradeA = calculateAverageGrade(studentA.grades);
                var avgGradeB = calculateAverageGrade(studentB.grades);
                return order === 'asc'
                    ? avgGradeA - avgGradeB
                    : avgGradeB - avgGradeA;
            }
            case SortType.Age:
            case SortType.Married:
                return order === 'asc'
                    ? Number(studentA[sortBy]) - Number(studentB[sortBy])
                    : Number(studentB[sortBy]) - Number(studentA[sortBy]);
            default:
                return 0;
        }
    });
}
exports.sortStudents = sortStudents;
