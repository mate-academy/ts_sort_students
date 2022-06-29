"use strict";
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
    SortType["Name"] = "name";
    SortType["Surname"] = "surname";
    SortType["Age"] = "age";
    SortType["Married"] = "married";
    SortType["AverageGrade"] = "grades";
})(SortType = exports.SortType || (exports.SortType = {}));
function getAverageGrade(studentGrades) {
    return studentGrades
        .reduce(function (sum, grade) { return (sum + grade); }) / studentGrades.length;
}
function sortStudents(students, sortBy, order) {
    var sortedStudents = __spreadArray([], students, true);
    var orderSort = order === 'asc' ? 1 : -1;
    switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
            sortedStudents.sort(function (studentA, studentB) { return studentA[sortBy]
                .localeCompare(studentB[sortBy]) * orderSort; });
            break;
        case SortType.Age:
        case SortType.Married:
            sortedStudents
                .sort(function (studentA, studentB) { return (Number(studentA[sortBy])
                - Number(studentB[sortBy])) * orderSort; });
            break;
        case SortType.AverageGrade:
            sortedStudents
                .sort(function (studentA, studentB) { return (getAverageGrade(studentA.grades)
                - getAverageGrade(studentB.grades)) * orderSort; });
            break;
        default:
            break;
    }
    return sortedStudents;
}
exports.sortStudents = sortStudents;
