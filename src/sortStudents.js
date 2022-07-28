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
    SortType[SortType["Name"] = 0] = "Name";
    SortType[SortType["Surname"] = 1] = "Surname";
    SortType[SortType["Age"] = 2] = "Age";
    SortType[SortType["Married"] = 3] = "Married";
    SortType[SortType["AverageGrade"] = 4] = "AverageGrade";
})(SortType = exports.SortType || (exports.SortType = {}));
function sortStudents(students, sortBy, order) {
    var studentsCopy = __spreadArray([], students, true);
    return studentsCopy.sort(function (studentA, studentB) {
        var firstStudent = order === 'asc'
            ? studentA
            : studentB;
        var secondStudent = order === 'asc'
            ? studentB
            : studentA;
        var firstStudentAverage = firstStudent.grades.reduce(function (gradeA, gradeB) { return gradeA + gradeB; }) / firstStudent.grades.length;
        var secondStudentAverage = secondStudent.grades.reduce(function (gradeA, gradeB) { return gradeA + gradeB; }) / secondStudent.grades.length;
        switch (sortBy) {
            case SortType.Name:
                return firstStudent.name.localeCompare(secondStudent.name);
            case SortType.Surname:
                return firstStudent.surname.localeCompare(secondStudent.surname);
            case SortType.Age:
                return firstStudent.age - secondStudent.age;
            case SortType.Married:
                return Number(firstStudent.married) - Number(secondStudent.married);
            default:
                return firstStudentAverage - secondStudentAverage;
        }
    });
}
exports.sortStudents = sortStudents;
